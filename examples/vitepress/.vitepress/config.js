import { defineConfig, createMarkdownRenderer } from "vitepress";
import { VisualiaMarkdownIt } from "visualia2";

export default defineConfig({
  markdown: {
    config: (md) =>
      md.use(VisualiaMarkdownIt, createMarkdownRenderer("").render),
  },
  vue: { reactivityTransform: true },
  vite: {
    resolve: {
      alias: { vue: "vue/dist/vue.esm-browser.prod.js" },
    },
  },
});
