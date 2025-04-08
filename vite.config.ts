
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    // Generate relative paths in the build output - important for cPanel
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framework: ['react-router-dom', '@tanstack/react-query'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip']
        }
      }
    },
    // Generate sourcemaps only in development
    sourcemap: mode === 'development',
    // Minify all outputs
    minify: 'terser',
    // Target modern browsers to reduce bundle size
    target: 'es2018'
  }
}));
