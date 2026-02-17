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
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Javascript", icon: SiJavascript },
        { name: "Typescript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Supabase", icon: SiSupabase },
        { name: "Appwrite", icon: SiAppwrite },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      name: "CMS & Website Builders",
      skills: [
        { name: "Wordpress", icon: SiWordpress },
        { name: "Wix", icon: SiWix },
        { name: "Shopify", icon: SiShopify },
      ],
    },
    {
      name: "Tools & Version Control",
      skills: [{ name: "Git/GitHub", icon: SiGithub }],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-primary flex items-center justify-center scale-in"
      style={{ paddingTop: "clamp(80px, 15vw, 140px)", paddingBottom: "40px" }}
    >
      <div
        className="max-w-5xl mx-auto px-6 w-full"
        style={{
          marginLeft: "clamp(10px, 3vw, 20px)",
          marginRight: "clamp(10px, 3vw, 20px)",
        }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#24D0C6", marginBottom: "clamp(24px, 5vw, 48px)" }}
        >
          My Skills
        </h2>

        {skillCategories.map((category) => (
          <div key={category.name} style={{ marginBottom: "48px" }}>
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold"
              style={{
                color: "#24D0C6",
                marginBottom: "clamp(16px, 4vw, 24px)",
                textAlign: "center",
              }}
            >
              {category.name}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(clamp(80px, 20vw, 120px), 1fr))",
                gap: "clamp(12px, 3vw, 20px)",
                justifyItems: "center",
              }}
            >
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "clamp(8px, 2vw, 12px)",
                      padding: "clamp(12px, 3vw, 16px)",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(36, 208, 198, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon
                      style={{
                        fontSize: "clamp(32px, 8vw, 48px)",
                        color: "#24D0C6",
                      }}
                    />
                    <p
                      className="text-xs sm:text-sm font-medium text-center"
                      style={{ color: "#FFFFFF" }}
                    >
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
