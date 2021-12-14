import { defineComponent } from "vue";
export { default as VSlider } from "./components/VSlider.vue";
export { default as VMath } from "./components/VMath.vue";
import VSlider from "./components/VSlider.vue";
import VMath from "./components/VSlider.vue";
export const components = { VSlider, VMath };

import * as utils from "./utils/index.js";
export * from "./utils/index.js";

export const Visualia = {
  install: (app) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, defineComponent(component));
    });
    Object.entries(utils).forEach(
      ([name, util]) => (app.config.globalProperties[name] = util)
    );
  },
};
