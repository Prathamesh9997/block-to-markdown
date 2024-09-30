import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"),
      "@components": path.resolve(
        new URL(".", import.meta.url).pathname,
        "./src/components"
      ),
      "@features": path.resolve(
        new URL(".", import.meta.url).pathname,
        "./src/features"
      ),
      "@pages": path.resolve(
        new URL(".", import.meta.url).pathname,
        "./src/pages"
      ),
      "@store": path.resolve(
        new URL(".", import.meta.url).pathname,
        "./src/store"
      ),
    },
  },
});
