import { defineConfig, createMarkdownRenderer } from "vitepress";
import { unescapeAll, escapeHtml } from "markdown-it/lib/common/utils";

const renderer = createMarkdownRenderer("");

function VisualiaMarkdownIt(md) {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = function () {
    const [tokens, idx, options, env, slf] = arguments;
    const info = unescapeAll(tokens[idx].info).trim();
    if (info === "md") {
      const { html } = renderer.render(tokens[idx].content || "");
      return `
        ${defaultRender(...arguments)}
        <VCompiler content='${html}' />
      `;
      //   return `${defaultRender(...arguments)}<pre>${escapeHtml(
      //     tokens[idx].content
      //   )}</pre>`;
    }
    return defaultRender(...arguments);
    /*
    var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : "",
      langName = "",
      langAttrs = "",
      highlighted,
      i,
      arr,
      tmpAttrs,
      tmpToken;

    if (info) {
      arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join("");
    }

    if (options.highlight) {
      highlighted =
        options.highlight(token.content, langName, langAttrs) ||
        escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }

    if (highlighted.indexOf("<pre") === 0) {
      return highlighted + "\n";
    }

    if (info) {
      i = token.attrIndex("class");
      tmpAttrs = token.attrs ? token.attrs.slice() : [];

      if (i < 0) {
        tmpAttrs.push(["class", options.langPrefix + langName]);
      } else {
        tmpAttrs[i] = tmpAttrs[i].slice();
        tmpAttrs[i][1] += " " + options.langPrefix + langName;
      }

      // Fake token just to render attributes
      tmpToken = {
        attrs: tmpAttrs,
      };

      return (
        "??<pre><code" +
        slf.renderAttrs(tmpToken) +
        ">" +
        highlighted +
        "</code></pre>\n"
      );
    }

    return (
      "!!<pre><code" +
      slf.renderAttrs(token) +
      ">" +
      highlighted +
      "</code></pre>\n"
    );*/
  };
  return md;
}

export default defineConfig({
  vue: { reactivityTransform: true },
  markdown: { config: (md) => md.use(VisualiaMarkdownIt) },
});
