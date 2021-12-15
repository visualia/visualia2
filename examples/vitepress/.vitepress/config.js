import { defineConfig, createMarkdownRenderer } from "vitepress";
import { unescapeAll, escapeHtml } from "markdown-it/lib/common/utils";

const renderer = createMarkdownRenderer("");

function VisualiaMarkdownIt(md) {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    const info = unescapeAll(tokens[idx].info).trim();
    if (info === "md") {
      const { html } = renderer.render(tokens[idx].content || "");
      return `
        ${defaultRender(...arguments)}
        <VCompiler content='${html}' />
      `;
    }
    return defaultRender(...arguments);
  };
  return md;
}

export default defineConfig({
  vue: { reactivityTransform: true },
  markdown: { config: (md) => md.use(VisualiaMarkdownIt) },
});
