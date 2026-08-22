import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: true,

    allowedHosts: [
      "innovest-of83.onrender.com",
    ],

    watch: {
      usePolling: true,
      interval: 100,
    },
  },

  preview: {
    host: true,
    allowedHosts: [
      "innovest-of83.onrender.com",
    ],
  },
});
