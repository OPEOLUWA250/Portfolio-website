import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const CARD_GAP = 20;
const SCROLL_SPEED = 45; // px per second

const Work = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const directionRef = useRef<1 | -1>(1);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const projects: {
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    tech: string;
  }[] = [
    {
      title: "Toymak Fashion",
      description:
        "A UK e-commerce store for shapewear, waist trainers, and everyday fashion, with a filterable product catalogue, wishlist and cart, and multi-currency pricing.",
      image: "/Image/work/toymak.png",
      link: "https://www.toymakfashion.com/",
      github: "https://github.com/OPEOLUWA250/toymak-fashion",
      tech: "Next.Js, Typescript",
    },
    {
      title: "Rep Up",
      description:
        "A beginner gym coach that tells you what to lift today, with animated form demos, guided workouts, progress tracking, and Nigerian meal portion guides — all offline-first.",
      image: "/Image/work/repup.png",
      link: "https://rep-up-nine.vercel.app/",
      github: "https://github.com/OPEOLUWA250/Rep-up",
      tech: "React, PWA",
    },
    {
      title: "CampusGuide",
      description:
        "Simplifies campus navigation across 30+ Nigerian universities with real-time maps, building search, location sharing, and OpenStreetMap integration.",
      image: "/Image/work/campusguide.png",
      link: "https://campusguide.tech/",
      github: "https://github.com/OPEOLUWA250/Campus-Guide/tree/main",
      tech: "Next.Js, Typescript",
    },
    {
      title: "Ecoclimate Foundation",
      description:
        "A Nigerian environmental organization driving climate change mitigation through reforestation, waste management, and community education.",
      image: "/Image/work/ecoclimate.png",
      link: "https://ecoclimatefoundation.org/",
      github: "https://github.com/OPEOLUWA250/ecoclimate-foundation",
      tech: "React, Typescript",
    },
    {
      title: "MarketSpot Agency",
      description:
        " A performance-driven digital marketing agency that helps SMBs grow with SEO, paid ads, and search-first websites, using a pay-on-performance model that ensures incentives are aligned",
      image: "/Image/work/marketspot.png",
      link: "https://www.marketspot.agency/",
      github: "https://github.com/OPEOLUWA250/marketspot-agency",
      tech: "Next.Js, Typescript",
    },
    {
      title: "Tabitha Books",
      description:
        "A curated book discovery platform focused on mindful living, personal growth, and transformative storytelling.",
      image: "/Image/work/tabitha.png",
      link: "https://tabitha-books.vercel.app/",
      github: "https://github.com/OPEOLUWA250/tabitha-books",
      tech: "Next.Js, TypeScript",
    },
  ];

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const getStep = () => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + CARD_GAP : 320;
  };

  const pauseAutoplay = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const resumeAutoplay = (delay = 0) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  // Continuous, ping-pong auto-scroll: drifts forward, reverses at each end.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        el.removeEventListener("scroll", updateArrows);
        window.removeEventListener("resize", updateArrows);
      };
    }

    let rafId: number;
    let lastTime: number | null = null;

    const tick = (time: number) => {
      if (lastTime === null) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;

      if (!pausedRef.current) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        let next = el.scrollLeft + directionRef.current * SCROLL_SPEED * (dt / 1000);
        if (next >= maxScroll) {
          next = maxScroll;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }
        el.scrollLeft = next;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const handleEnter = () => pauseAutoplay();
    const handleLeave = () => resumeAutoplay(0);
    const handleDown = () => pauseAutoplay();
    const handleUp = () => resumeAutoplay(600);

    el.addEventListener("pointerenter", handleEnter);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("pointerdown", handleDown);
    el.addEventListener("pointerup", handleUp);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      el.removeEventListener("pointerenter", handleEnter);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("pointerdown", handleDown);
      el.removeEventListener("pointerup", handleUp);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    pauseAutoplay();
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * getStep(), behavior: "smooth" });
    resumeAutoplay(1200);
  };

  return (
    <section
      id="work"
      className="bg-primary flex items-center justify-center scale-in"
      style={{
        paddingTop: "clamp(80px, 15vw, 120px)",
        paddingBottom: "clamp(60px, 10vw, 90px)",
      }}
    >
      <style>{`
        .work-scroller {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .work-scroller::-webkit-scrollbar { display: none; }
        .work-card .work-card-img {
          transition: transform 0.5s ease;
        }
        .work-card:hover .work-card-img {
          transform: scale(1.06);
        }
        .work-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
        }
        .work-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .work-arrow:not(:disabled):hover {
          background: rgba(36, 208, 198, 0.15);
          border-color: rgba(36, 208, 198, 0.5);
          color: #24d0c6;
        }
      `}</style>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full"
      >
        <div
          style={{
            position: "relative",
            marginBottom: "clamp(24px, 5vw, 40px)",
          }}
        >
          <h2
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center"
            style={{ color: "#24D0C6" }}
          >
            My Work
          </h2>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexShrink: 0,
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <button
              type="button"
              className="work-arrow"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous project"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              type="button"
              className="work-arrow"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Next project"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="work-scroller"
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            paddingBottom: "8px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              data-card
              className="work-card"
              style={{
                flex: "0 0 clamp(320px, 72vw, 920px)",
                borderRadius: "16px",
                overflow: "hidden",
                background: "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                border: "1px solid rgba(182, 211, 209, 0.14)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", overflow: "hidden", aspectRatio: "1.9" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="work-card-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />
              </a>

              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "18px",
                      textDecoration: "none",
                    }}
                  >
                    {project.title}
                    <FaArrowUpRightFromSquare size={12} style={{ color: "#24D0C6", flexShrink: 0 }} />
                  </a>
                  {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.8)",
                      flexShrink: 0,
                    }}
                  >
                    <FaGithub size={12} />
                  </a>
                  )}
                </div>

                <p
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.5,
                    margin: "0 0 16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                  {project.tech.split(",").map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#24D0C6",
                        background: "rgba(36, 208, 198, 0.1)",
                        border: "1px solid rgba(36, 208, 198, 0.2)",
                        padding: "3px 9px",
                        borderRadius: "999px",
                      }}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
