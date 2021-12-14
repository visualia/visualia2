export const components = import.meta.glob("./components/*.vue");

// export const Visualia: Plugin = {
//   install: (app) => {
//     Object.entries(components).forEach(([path, component]) => {
//       const name = path.split("/").slice(-1)[0].replace(".vue", "");
//       app.component(name, defineAsyncComponent(component));
//     });
//     Object.entries(utils).forEach(
//       ([name, util]) => (app.config.globalProperties[name] = util)
//     );
//   },
// };
