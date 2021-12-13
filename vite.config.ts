import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      refTransform: true
    }),
  ],
  build: {
    lib: {
      formats: ["es", "cjs", "umd"],
      entry: path.resolve(__dirname, "src/visualia.js"),
      name: "visualia",
      fileName: (format) => {
        return {
          es: "visualia.js",
          cjs: "visualia.cjs",
          umd: "visualia.umd.js",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
