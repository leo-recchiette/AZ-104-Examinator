import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // 0.0.0.0: senza questo Vite bind-a sul localhost del container,
    // irraggiungibile dall'host attraverso il mapping di porta di Docker.
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      // I bind mount di Docker Desktop su macOS non propagano sempre gli
      // eventi inotify a chokidar: il polling garantisce l'hot reload.
      usePolling: true,
      interval: 300,
    },
  },
});
