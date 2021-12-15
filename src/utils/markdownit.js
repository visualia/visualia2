export function VisualiaMarkdownIt(md, render) {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    const info = tokens[idx].info.trim();
    if (info === "html") {
      const { html } = render(tokens[idx].content || "");
      return `
        ${defaultRender(...arguments)}
        <VCompiler content='${html}' />
      `;
    }
    return defaultRender(...arguments);
  };
  return md;
}
