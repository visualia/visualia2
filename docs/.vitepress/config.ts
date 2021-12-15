import { defineConfig, createMarkdownRenderer } from "vitepress";
import { VisualiaMarkdownIt } from "../../src/utils/markdownit";

export default defineConfig({
  title: "Visualia",
  markdown: {
    config: (md) =>
      md.use(VisualiaMarkdownIt, createMarkdownRenderer("").render),
  },
  vue: { reactivityTransform: true },
  themeConfig: {
    repo: "visualia/visualia",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Page source",
  },
});
