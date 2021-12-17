<script lang="ts">
import { h } from "vue";

export default {
  props: ["content"],
  setup(props: any) {
    return () => h("div", props.content);
  },
};
</script>
