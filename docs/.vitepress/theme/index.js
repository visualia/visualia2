import { reactive } from "vue";
import DefaultTheme from "vitepress/theme";
import { Visualia } from "../../../src/visualia";
import "./index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
