import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: (name, filename, css) => {
        const componentName = filename
          .replace(/\.\w+$/, "")
          .split("/")
          .slice(-2, -1);

        const hash = btoa(css).substring(0, 5);

        return `${componentName}_${name}_${hash}`;
      },
    },
  },
});
