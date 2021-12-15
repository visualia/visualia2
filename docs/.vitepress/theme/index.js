import { reactive } from "vue";
import DefaultTheme from "vitepress/theme";
import { Visualia } from "../../../src/visualia";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
    app.config.globalProperties.v = reactive({});
  },
};
