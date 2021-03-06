import { defineConfig, createMarkdownRenderer } from "vitepress";
import { VisualiaMarkdownIt } from "../../src/utils/markdownit.js";

export default defineConfig({
  title: "Visualia",
  markdown: {
    breaks: true,
    config: (md) =>
      md.use(VisualiaMarkdownIt, createMarkdownRenderer("").render),
  },
  vue: { reactivityTransform: true },
  vite: {
    resolve: {
      alias: {
        "vue/compiler-sfc": "@vue/compiler-sfc",
        vue: "vue/dist/vue.esm-browser.prod.js",
      },
    },
  },
  themeConfig: {
    repo: "visualia/visualia",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Page source",
    sidebar: {
      "/": [
        {
          children: [
            {
              text: "Guide",
              children: [
                { text: "Introduction", link: "/guide/introduction" },
                { text: "Get Started", link: "/guide/get-started" },
              ],
            },
            {
              text: "Components",
              children: ["slider", "math"].map((c) => ({
                text: `v-${c}`,
                link: `/components/v-${c}`,
              })),
            },
            {
              text: "Utilities",
              children: [
                {
                  text: "Colors",
                  children: [{ text: "hsl", link: "/utils/colors/hsl" }],
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
