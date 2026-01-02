import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Email.js with Public Key from environment
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error("Email.js Public Key is not set in .env file");
      setSubmitStatus(
        "Email service not configured. Please contact the site owner."
      );
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setSubmitStatus("Email service not configured. Check your .env file.");
      setIsLoading(false);
      console.error("Missing Service ID or Template ID in .env");
      return;
    }

    try {
      // Using Service ID and Template ID from environment variables
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "devopeoluwa@gmail.com",
      });
      setSubmitStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again.");
      console.error("Email error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      value: "Lagos, Nigeria",
      onClick: null,
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+234-901-5883-729",
      onClick: () => window.open("tel:+234-901-5883-729"),
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      value: "devopeoluwa@gmail.com",
      onClick: () =>
        window.open(
          "https://mail.google.com/mail/u/0/?fs=1&to=devopeoluwa@gmail.com&tf=cm",
          "_blank"
        ),
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="title reveal">
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="content">
        <div className="row">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="card reveal"
              onClick={info.onClick}
              style={info.onClick ? { cursor: "pointer" } : {}}
            >
              <div className="contact-icon">
                <i className={info.icon}></i>
              </div>
              <div className="info">
                <h3>{info.title}</h3>
                <span>{info.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="contact-form reveal">
            <h3>Send Message</h3>
            {submitStatus && (
              <div
                className={`status-message ${
                  submitStatus.includes("successfully") ? "success" : "error"
                }`}
              >
                {submitStatus}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="input-box">
                <textarea
                  name="message"
                  rows="8"
                  cols="80"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="input-box">
                <input
                  type="submit"
                  className="send-btn"
                  value={isLoading ? "Sending..." : "Send"}
                  disabled={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
