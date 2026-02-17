import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  const contactInfo = [
    {
      label: "Email",
      value: "opeoluwadejumos@gmail.com",
      icon: FaEnvelope,
      link: "mailto:opeoluwadejumos@gmail.com",
    },
    {
      label: "Phone",
      value: "+234-901-5883-729",
      icon: FaPhone,
      link: "tel:+234-901-5883-729",
    },
    {
      label: "Location",
      value: "Lagos, Nigeria",
      icon: FaMapMarkerAlt,
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/opeoluwa-adejumo/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/devopeoluwa/",
      icon: FaInstagram,
    },
    { name: "Twitter", url: "https://x.com/devopeoluwa", icon: FaTwitter },
    { name: "GitHub", url: "https://github.com/OPEOLUWA250", icon: FaGithub },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Integrate with Supabase to store messages
      // For now, just show success message
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-primary flex items-center justify-center scale-in"
      style={{
        paddingTop: "clamp(80px, 15vw, 120px)",
        paddingBottom: "clamp(30px, 8vw, 40px)",
      }}
    >
      <div
        className="max-w-4xl mx-auto px-6 w-full"
        style={{
          marginLeft: "clamp(10px, 3vw, 20px)",
          marginRight: "clamp(10px, 3vw, 20px)",
        }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#24D0C6", marginBottom: "clamp(24px, 5vw, 48px)" }}
        >
          Get In Touch
        </h2>

        {/* Contact Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(clamp(150px, 80vw, 200px), 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
            marginBottom: "clamp(32px, 8vw, 48px)",
          }}
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const CardContent = (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "clamp(16px, 4vw, 24px)",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  cursor: info.link ? "pointer" : "default",
                  backgroundColor: "rgba(36, 208, 198, 0.05)",
                  border: "1px solid rgba(36, 208, 198, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(36, 208, 198, 0.4)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(36, 208, 198, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backgroundColor =
                    "rgba(36, 208, 198, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.2)";
                }}
              >
                <Icon
                  style={{
                    fontSize: "clamp(24px, 6vw, 32px)",
                    color: "#24D0C6",
                    marginBottom: "clamp(8px, 2vw, 12px)",
                  }}
                />
                <h3
                  style={{
                    color: "#24D0C6",
                    fontWeight: "700",
                    marginBottom: "8px",
                    fontSize: "clamp(14px, 3vw, 16px)",
                  }}
                >
                  {info.label}
                </h3>
                <p
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontSize: "clamp(12px, 2vw, 14px)",
                  }}
                >
                  {info.value}
                </p>
              </div>
            );

            return info.link ? (
              <a
                key={info.label}
                href={info.link}
                style={{ textDecoration: "none" }}
              >
                {CardContent}
              </a>
            ) : (
              <div key={info.label}>{CardContent}</div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div
          style={{
            backgroundColor: "rgba(36, 208, 198, 0.05)",
            border: "1px solid rgba(36, 208, 198, 0.2)",
            borderRadius: "8px",
            padding: "clamp(20px, 5vw, 32px)",
            marginBottom: "clamp(32px, 8vw, 48px)",
            maxWidth: "600px",
            margin: "0 auto clamp(32px, 8vw, 48px) auto",
          }}
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-center"
            style={{ color: "#24D0C6", marginBottom: "clamp(16px, 4vw, 24px)" }}
          >
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "rgba(10, 26, 47, 0.8)",
                  border: "1px solid rgba(36, 208, 198, 0.3)",
                  borderRadius: "4px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                  transition: "all 0.3s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#24D0C6";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(36, 208, 198, 0.3)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "rgba(10, 26, 47, 0.8)",
                  border: "1px solid rgba(36, 208, 198, 0.3)",
                  borderRadius: "4px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                  transition: "all 0.3s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#24D0C6";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(36, 208, 198, 0.3)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "rgba(10, 26, 47, 0.8)",
                  border: "1px solid rgba(36, 208, 198, 0.3)",
                  borderRadius: "4px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                  transition: "all 0.3s",
                  boxSizing: "border-box",
                  resize: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#24D0C6";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(36, 208, 198, 0.3)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {submitStatus && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "4px",
                  marginBottom: "16px",
                  textAlign: "center",
                  backgroundColor:
                    submitStatus.type === "success"
                      ? "rgba(76, 175, 80, 0.2)"
                      : "rgba(244, 67, 54, 0.2)",
                  color:
                    submitStatus.type === "success" ? "#4CAF50" : "#F44336",
                  fontSize: "14px",
                }}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "12px 16px",
                backgroundColor: "#24D0C6",
                color: "#000000",
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontSize: "clamp(14px, 2vw, 16px)",
                transition: "all 0.3s",
                opacity: isSubmitting ? 0.6 : 1,
                width: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.transform = "scale(1.02)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#24D0C6";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#24D0C6",
                  fontSize: "28px",
                  transition: "all 0.3s",
                  padding: "8px",
                  borderRadius: "50%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(36, 208, 198, 0.8)";
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#24D0C6";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(36, 208, 198, 0.3)",
            paddingTop: "32px",
            marginTop: "48px",
          }}
        >
          {/* Quick Navigation Links */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Services", id: "services" },
              { name: "Work", id: "work" },
              { name: "Contact", id: "contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#24D0C6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            style={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "12px",
              paddingBottom: "16px",
            }}
          >
            <p>Copyright © 2026 devopeoluwa. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
