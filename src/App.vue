<script setup lang="ts">
import { watchEffect } from "vue";
import { Repl, ReplStore } from "@vue/repl";
import "@vue/repl/style.css";

async function getRawFiles(paths: string[]) {
  return Promise.all(
    paths.map((path) => import(/* @vite-ignore */ `${path}?raw`))
  ).then((res) => {
    return res.map((r) => r.default);
  });
}

import AppSample from "./AppSample.vue?raw";
import visualia from "./visualia.js?raw";
import ImportMap from "./import-map.json?raw";

import componentsIndex from "./components/index.js?raw";
import utilsIndex from "./utils/index.js?raw";

const store = new ReplStore({
  //serializedState: location.hash.slice(1),
});

//watchEffect(() => history.replaceState({}, "", store.serialize()));

const baseFiles = {
  "App.vue": AppSample,
  "visualia.js": visualia,
  "import-map.json": ImportMap,
  "components/index.js": componentsIndex,
  "utils/index.js": utilsIndex,
};

async function getFiles(source: any, path: any) {
  const filePaths = String(source)
    .match(/"(.*?)"/g)!
    .map((file: any) => file.replace(/"/g, "").replace(/\.\//g, ""));
  const rawFiles = await getRawFiles(filePaths.map((f) => `./${path}/${f}`));
  return Object.fromEntries(
    filePaths.map((file: any, i) => [file, rawFiles[i]])
  );
}

const componentsFiles = await getFiles(componentsIndex, "components");
const utilsFiles = await getFiles(utilsIndex, "utils");

store.setFiles({ ...baseFiles, ...componentsFiles, ...utilsFiles });

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
