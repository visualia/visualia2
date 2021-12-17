import DefaultTheme from "vitepress/theme";
import { Visualia } from "visualia2";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
