import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

// Only create client if credentials exist
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Messages table operations - uses Supabase or localStorage
export const messageOperations = {
  async getAll() {
    if (!supabase) {
      const messages = localStorage.getItem("messages");
      return messages ? JSON.parse(messages) : [];
    }

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },

  async create(message: { name: string; email: string; message: string }) {
    if (!supabase) {
      const id = Date.now().toString();
      const newMessage = {
        id,
        ...message,
        created_at: new Date().toISOString(),
      };
      const messages = localStorage.getItem("messages");
      const allMessages = messages ? JSON.parse(messages) : [];
      allMessages.unshift(newMessage);
      localStorage.setItem("messages", JSON.stringify(allMessages));
      return [newMessage];
    }

    const { data, error } = await supabase
      .from("messages")
      .insert([{ ...message, created_at: new Date() }])
      .select();
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    if (!supabase) {
      const messages = localStorage.getItem("messages");
      if (messages) {
        const allMessages = JSON.parse(messages);
        const filtered = allMessages.filter((m: any) => m.id !== id);
        localStorage.setItem("messages", JSON.stringify(filtered));
      }
      return;
    }

    const { error } = await supabase.from("messages").delete().eq("id", id);
    if (error) throw error;
  },
};

// Projects table operations - uses Supabase or localStorage
export const projectOperations = {
  async getAll() {
    if (!supabase) {
      const projects = localStorage.getItem("projects");
      return projects ? JSON.parse(projects) : [];
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },

  async create(project: {
    title: string;
    description: string;
    tech: string;
    image: string;
    link: string;
  }) {
    if (!supabase) {
      const id = Date.now().toString();
      const newProject = {
        id,
        ...project,
        created_at: new Date().toISOString(),
      };
      const projects = localStorage.getItem("projects");
      const allProjects = projects ? JSON.parse(projects) : [];
      allProjects.unshift(newProject);
      localStorage.setItem("projects", JSON.stringify(allProjects));
      return [newProject];
    }

    const { data, error } = await supabase
      .from("projects")
      .insert([{ ...project, created_at: new Date() }])
      .select();
    if (error) throw error;
    return data;
  },

  async update(
    id: string,
    project: {
      title: string;
      description: string;
      tech: string;
      image: string;
      link: string;
    },
  ) {
    if (!supabase) {
      const projects = localStorage.getItem("projects");
      if (projects) {
        const allProjects = JSON.parse(projects);
        const index = allProjects.findIndex((p: any) => p.id === id);
        if (index !== -1) {
          allProjects[index] = { ...allProjects[index], ...project };
          localStorage.setItem("projects", JSON.stringify(allProjects));
          return [allProjects[index]];
        }
      }
      return [];
    }

    const { data, error } = await supabase
      .from("projects")
      .update(project)
      .eq("id", id)
      .select();
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    if (!supabase) {
      const projects = localStorage.getItem("projects");
      if (projects) {
        const allProjects = JSON.parse(projects);
        const filtered = allProjects.filter((p: any) => p.id !== id);
        localStorage.setItem("projects", JSON.stringify(filtered));
      }
      return;
    }

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) throw error;
  },
};
