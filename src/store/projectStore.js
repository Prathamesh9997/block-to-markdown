import { create } from "zustand";

export const useProjectStore = create((set) => ({
  projects: [
    { id: "1", name: "Project Alpha" },
    { id: "2", name: "Project Beta" },
    { id: "3", name: "Project Gamma" },
    // Add more projects as needed
  ],
  selectedProject: "1", // Default project ID
  setSelectedProject: (projectId) => set({ selectedProject: projectId }),
}));
