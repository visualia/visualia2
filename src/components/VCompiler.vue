<script lang="ts">
import { computed, h } from "vue";
import { compile } from "vue/dist/vue.esm-bundler.js";
import { utils } from "../visualia";

export const compileSource = (source: string) => {
  const errors = [];
  let code = null;
  try {
    const compiledCode = compile(source, {
      onError: (err: any) => {
        errors.push(err);
      },
    });
    code = compiledCode;
  } catch (e) {
    errors.push(e);
  }
  return { code, errors };
};

export default {
  props: ["content"],
  setup(props: any) {
    const { code, errors } = compileSource(props.content);
    const compiledContent = computed(() => ({
      setup() {
        return { ...utils };
      },
      render: code,
    }));
    return () =>
      errors.length
        ? errors
            .map(String)
            .map((e) => h("div", { style: { color: "red" } }, e))
        : h(compiledContent.value);
  },
};
</script>
