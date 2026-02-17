import { useState, useEffect } from "react";
import { messageOperations, projectOperations } from "../utils/supabaseClient";

type TabType = "messages" | "projects";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  image: string;
  link: string;
  created_at: string;
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState<TabType>("messages");
  const [messages, setMessages] = useState<Message[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    link: "",
  });

  // Load messages
  useEffect(() => {
    if (activeTab === "messages") {
      loadMessages();
    }
  }, [activeTab]);

  // Load projects
  useEffect(() => {
    if (activeTab === "projects") {
      loadProjects();
    }
  }, [activeTab]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await messageOperations.getAll();
      setMessages(data);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
    setLoading(false);
  };

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await projectOperations.getAll();
      setProjects(data);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
    setLoading(false);
  };

  const deleteMessage = async (id: string) => {
    if (confirm("Delete this message?")) {
      try {
        await messageOperations.delete(id);
        setMessages(messages.filter((m) => m.id !== id));
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  const handleProjectInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingProject) {
        await projectOperations.update(editingProject.id, formData);
        setProjects(
          projects.map((p) =>
            p.id === editingProject.id ? { ...p, ...formData } : p,
          ),
        );
      } else {
        const result = await projectOperations.create(formData);
        if (result) {
          setProjects([result[0], ...projects]);
        }
      }

      setFormData({
        title: "",
        description: "",
        tech: "",
        image: "",
        link: "",
      });
      setEditingProject(null);
    } catch (error) {
      console.error("Error saving project:", error);
    }
    setLoading(false);
  };

  const deleteProject = async (id: string) => {
    if (confirm("Delete this project?")) {
      try {
        await projectOperations.delete(id);
        setProjects(projects.filter((p) => p.id !== id));
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const editProject = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      tech: project.tech,
      image: project.image,
      link: project.link,
    });
  };

  const cancelEdit = () => {
    setEditingProject(null);
    setFormData({ title: "", description: "", tech: "", image: "", link: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A1A2F",
        color: "#FFFFFF",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            color: "#24D0C6",
            marginBottom: "32px",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          Admin Dashboard
        </h1>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "32px",
            borderBottom: "1px solid rgba(36, 208, 198, 0.2)",
          }}
        >
          <button
            onClick={() => setActiveTab("messages")}
            style={{
              padding: "12px 24px",
              backgroundColor:
                activeTab === "messages" ? "#24D0C6" : "transparent",
              color: activeTab === "messages" ? "#000000" : "#FFFFFF",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
              borderBottom:
                activeTab === "messages" ? "3px solid #24D0C6" : "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "messages") {
                e.currentTarget.style.color = "#24D0C6";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "messages") {
                e.currentTarget.style.color = "#FFFFFF";
              }
            }}
          >
            Messages
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            style={{
              padding: "12px 24px",
              backgroundColor:
                activeTab === "projects" ? "#24D0C6" : "transparent",
              color: activeTab === "projects" ? "#000000" : "#FFFFFF",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
              borderBottom:
                activeTab === "projects" ? "3px solid #24D0C6" : "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "projects") {
                e.currentTarget.style.color = "#24D0C6";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "projects") {
                e.currentTarget.style.color = "#FFFFFF";
              }
            }}
          >
            Projects
          </button>
        </div>

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div>
            <h2 style={{ color: "#24D0C6", marginBottom: "24px" }}>
              Messages ({messages.length})
            </h2>
            {loading ? (
              <p>Loading...</p>
            ) : messages.length === 0 ? (
              <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                No messages yet
              </p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gap: "16px",
                }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      backgroundColor: "rgba(36, 208, 198, 0.05)",
                      border: "1px solid rgba(36, 208, 198, 0.2)",
                      padding: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        marginBottom: "12px",
                      }}
                    >
                      <div>
                        <h3 style={{ color: "#24D0C6", marginBottom: "4px" }}>
                          {msg.name}
                        </h3>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "14px",
                          }}
                        >
                          {msg.email}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        style={{
                          padding: "6px 16px",
                          backgroundColor: "#f44336",
                          color: "#FFFFFF",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "600",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#d32f2f";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f44336";
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <p style={{ color: "#FFFFFF", lineHeight: "1.6" }}>
                      {msg.message}
                    </p>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "12px",
                        marginTop: "12px",
                      }}
                    >
                      {new Date(msg.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div>
            <h2 style={{ color: "#24D0C6", marginBottom: "24px" }}>
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>

            {/* Project Form */}
            <form onSubmit={handleProjectSubmit}>
              <div
                style={{
                  backgroundColor: "rgba(36, 208, 198, 0.05)",
                  border: "1px solid rgba(36, 208, 198, 0.2)",
                  padding: "24px",
                  borderRadius: "8px",
                  marginBottom: "32px",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleProjectInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "rgba(10, 26, 47, 0.8)",
                      border: "1px solid rgba(36, 208, 198, 0.3)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleProjectInputChange}
                    rows={3}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "rgba(10, 26, 47, 0.8)",
                      border: "1px solid rgba(36, 208, 198, 0.3)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      resize: "none",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Tech Stack
                  </label>
                  <input
                    type="text"
                    name="tech"
                    value={formData.tech}
                    onChange={handleProjectInputChange}
                    placeholder="e.g., React, Tailwind CSS"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "rgba(10, 26, 47, 0.8)",
                      border: "1px solid rgba(36, 208, 198, 0.3)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleProjectInputChange}
                    placeholder="/Image/work/project.jpg"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "rgba(10, 26, 47, 0.8)",
                      border: "1px solid rgba(36, 208, 198, 0.3)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Project Link
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleProjectInputChange}
                    placeholder="https://example.com"
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      backgroundColor: "rgba(10, 26, 47, 0.8)",
                      border: "1px solid rgba(36, 208, 198, 0.3)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "10px 24px",
                      backgroundColor: "#24D0C6",
                      color: "#000000",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      transition: "all 0.3s",
                      opacity: loading ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = "#ffffff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = "#24D0C6";
                      }
                    }}
                  >
                    {editingProject ? "Update Project" : "Add Project"}
                  </button>
                  {editingProject && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      style={{
                        padding: "10px 24px",
                        backgroundColor: "transparent",
                        color: "#24D0C6",
                        border: "1px solid #24D0C6",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#24D0C6";
                        e.currentTarget.style.color = "#000000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#24D0C6";
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </form>

            {/* Projects List */}
            <div>
              <h3 style={{ color: "#24D0C6", marginBottom: "16px" }}>
                Projects ({projects.length})
              </h3>
              {loading ? (
                <p>Loading...</p>
              ) : projects.length === 0 ? (
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  No projects yet
                </p>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      style={{
                        backgroundColor: "rgba(36, 208, 198, 0.05)",
                        border: "1px solid rgba(36, 208, 198, 0.2)",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "160px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ padding: "16px" }}>
                        <h4 style={{ color: "#24D0C6", marginBottom: "8px" }}>
                          {project.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "rgba(255, 255, 255, 0.7)",
                            marginBottom: "12px",
                          }}
                        >
                          {project.tech}
                        </p>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button
                            onClick={() => editProject(project)}
                            style={{
                              flex: 1,
                              padding: "8px 12px",
                              backgroundColor: "#24D0C6",
                              color: "#000000",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "12px",
                              fontWeight: "600",
                              transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#ffffff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#24D0C6";
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            style={{
                              flex: 1,
                              padding: "8px 12px",
                              backgroundColor: "#f44336",
                              color: "#FFFFFF",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontSize: "12px",
                              fontWeight: "600",
                              transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#d32f2f";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#f44336";
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
