export function VisualiaMarkdownIt(md, render) {
  const defaultFence = md.renderer.rules.fence;

  md.renderer.rules.fence = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    const info = tokens[idx].info.trim();
    if (info === "md") {
      const { html } = render(tokens[idx].content || "");
      return `
        ${defaultFence(...arguments)}
        <p>${html}</p>
      `;
    }
    return defaultFence(...arguments);
  };

  const defaultHtmlBlock = md.renderer.rules.html_block;

  md.renderer.rules.html_block = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;

    return String(tokens[idx].content).startsWith("<v-")
      ? `<p>${tokens[idx].content}</p>`
      : defaultHtmlBlock(...arguments);
  };

  return md;
}
