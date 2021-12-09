<script setup lang="ts">
import { watchEffect } from "vue";
import { Repl, ReplStore } from "@vue/repl";
import "@vue/repl/style.css";

import App from "./AppSample.vue?raw";
import visualia from "./visualia.js?raw";
import utils from "./utils/index.js?raw";
import VMath from "./components/VMath.vue?raw";
import VSlider from "./components/VSlider.vue?raw";
import ImportMap from "./import-map.json?raw";

const store = new ReplStore({
  serializedState: location.hash.slice(1),
});
store.setFiles({
  "App.vue": App,
  "visualia.js": visualia,
  "utils/index.js": utils,
  "components/VMath.vue": VMath,
  "components/VSlider.vue": VSlider,
  "import-map.json": ImportMap,
});
const sfcOptions = {
  script: {
    refTransform: true,
    propsDestructureTransform: true,
  },
};
watchEffect(() => history.replaceState({}, "", store.serialize()));
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
