import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiWordpress,
  SiWix,
  SiTailwindcss,
  SiSupabase,
  SiAppwrite,
  SiGithub,
  SiShopify,
  SiFirebase,
  SiPostgresql,
  SiCloudflare,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Appwrite", icon: SiAppwrite, color: "#FD366E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Wordpress", icon: SiWordpress, color: "#3499CD" },
    { name: "Wix", icon: SiWix, color: "#4CC9C4" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
    { name: "Git/GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  ];

  return (
    <section
      id="skills"
      className="flex items-center justify-center scale-in"
      style={{
        backgroundColor: "#0D2238",
        paddingTop: "clamp(70px, 12vw, 100px)",
        paddingBottom: "clamp(60px, 10vw, 90px)",
        minHeight: "auto",
      }}
    >
      <div
        className="max-w-5xl mx-auto px-6 w-full"
      >
        <h2
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#24D0C6", marginBottom: "clamp(24px, 5vw, 48px)" }}
        >
          Tech Stack
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "clamp(10px, 2.5vw, 16px)",
          }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                title={skill.name}
                aria-label={skill.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "clamp(48px, 12vw, 64px)",
                  height: "clamp(48px, 12vw, 64px)",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(36, 208, 198, 0.12)";
                  e.currentTarget.style.borderColor =
                    "rgba(36, 208, 198, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(36, 208, 198, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon
                  style={{
                    fontSize: "clamp(20px, 5vw, 26px)",
                    color: skill.color,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
