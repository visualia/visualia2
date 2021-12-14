<script setup lang="ts">
import { watchEffect } from "vue";
import { Repl, ReplStore } from "@vue/repl";
import "@vue/repl/style.css";

function globRaw(glob: Record<string, () => Promise<{ [key: string]: any }>>) {
  return Promise.all(
    Object.keys(glob).map((path) => import(/* @vite-ignore */ `${path}?raw`))
  ).then((res) => {
    return Object.fromEntries(
      res.map((u, i) => [Object.keys(glob)[i].replace("\.\/", ""), u.default])
    );
  });
}

import AppSample from "./AppSample.vue?raw";
import visualia from "./visualia.js?raw";
import ImportMap from "./import-map.json?raw";

const store = new ReplStore({
  //serializedState: location.hash.slice(1),
});

//watchEffect(() => history.replaceState({}, "", store.serialize()));

const baseFiles = {
  "App.vue": AppSample,
  "visualia.js": visualia,
  "import-map.json": ImportMap,
};

globRaw(import.meta.glob("./{utils,components}/*")).then((files) => {
  console.log(files);
  store.setFiles({ ...baseFiles, ...files });
});

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
