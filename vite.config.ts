import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  resolve: {
    alias: {
      "vue/compiler-sfc": "@vue/compiler-sfc",
      vue: "vue/dist/vue.esm-browser.prod.js",
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
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
