<script setup lang="ts">
import { Repl, ReplStore } from "@vue/repl";
import "@vue/repl/style.css";
import { watchEffect } from "vue";

import AppSample from "./AppSample.vue?raw";
import ImportMap from "./import-map.json?raw";

const store = new ReplStore({
  serializedState: location.hash.slice(1),
});

watchEffect(() => history.replaceState({}, "", store.serialize()));

const files = {
  "App.vue": AppSample,
  "import-map.json": ImportMap,
};

store.setFiles(files);

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
    :showCompileOutput="false"
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
