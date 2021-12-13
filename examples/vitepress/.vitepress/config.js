import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Visualia",
  markdown: { breaks: true },
  vue: { reactivityTransform: true },
});
