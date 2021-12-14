<script setup lang="ts">
import { watchEffect } from "vue";
import { Repl, ReplStore } from "@vue/repl";
import "@vue/repl/style.css";

function getFiles(paths: string[]) {
  return Promise.all(
    paths.map((path) => import(/* @vite-ignore */ `${path}?raw`))
  ).then((res) => {
    return res.map((r) => r.default);
  });
}

import { components, utils } from "./visualia";

import AppSample from "./AppSample.vue?raw";
import visualia from "./visualia.js?raw";
import componentsIndex from "./components/index.js?raw";
import utilsIndex from "./utils/index.js?raw";
import ImportMap from "./import-map.json?raw";

const store = new ReplStore({
  //serializedState: location.hash.slice(1),
});

//watchEffect(() => history.replaceState({}, "", store.serialize()));

const baseFiles = {
  "App.vue": AppSample,
  "visualia.js": visualia,
  "components/index.js": componentsIndex,
  "utils/index.js": utilsIndex,
  "import-map.json": ImportMap,
};

const componentFilePaths = Object.entries(components).map(
  (c) => c[1].__file || ""
);
const componentFileSources = await getFiles(componentFilePaths);
const componentFiles = Object.fromEntries(
  componentFileSources.map((file, i) => [
    `${Object.entries(components)[i][0]}.vue`,
    componentFileSources[i],
  ])
);

console.log(componentFiles);
store.setFiles({ ...baseFiles, ...componentFiles });

const sfcOptions = {
  script: {
    reactivityTransform: true,
  },
};
</script>

<template>
  <Repl
    :sfcOptions="sfcOptions"
    :store="store"
    :showCompileOutput="true"
    :clearConsole="false"
  />
</template>

<style>
body {
  margin: 0;
}
.vue-repl {
  height: 100vh;
}
</style>
