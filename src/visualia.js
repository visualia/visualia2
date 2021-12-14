import * as components from "./components/index.js";
export { components };
export * from "./components/index.js";

import * as utils from "./utils/index.js";
export { utils };
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
