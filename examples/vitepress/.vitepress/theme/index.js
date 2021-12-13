import DefaultTheme from "vitepress/theme";
import { VSlider, hsla } from "visualia2";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("VSlider", VSlider);
    app.config.globalProperties.hsla = hsla;
  },
};
