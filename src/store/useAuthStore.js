import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || { isAuthenticated: false },
  login: (user) => {
    set({ user: { ...user, isAuthenticated: true } });
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user, isAuthenticated: true })
    );
  },
  logout: () => set({ user: { isAuthenticated: false } }),
}));
