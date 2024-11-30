import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../../dist/frontend", // Gera o build na pasta dist
  },
  server: {
    port: 3000, // Certifique-se de que está na porta correta
    strictPort: true, // Não permita que a porta mude automaticamente
    open: false, // Evita que abra automaticamente
  },
});
