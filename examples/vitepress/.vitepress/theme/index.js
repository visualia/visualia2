import DefaultTheme from "vitepress/theme";
import { VSlider, hsla } from "visualia2";

import { computed, h, reactive } from "vue";
import { compile } from "vue/dist/vue.esm-bundler.js";

export const v = reactive({});

export const compileSource = (source) => {
  const errors = [];
  let code = null;
  try {
    const compiledCode = compile(source, {
      onError: (err) => {
        errors.push(err);
      },
    });
    code = compiledCode;
  } catch (e) {
    errors.push(e);
  }
  return { code, errors };
};

const VCompiler = {
  props: ["content"],
  setup(props) {
    const compiledContent = computed(() => ({
      setup() {
        return { v };
      },
      render: compile(props.content),
    }));

    return () => (compiledContent.value ? h(compiledContent.value) : null);
  },
};

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("VSlider", VSlider);
    app.component("VCompiler", VCompiler);
    app.config.globalProperties.hsla = hsla;
    app.config.globalProperties.v = v;
  },
};
