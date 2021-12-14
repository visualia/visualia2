<script setup>
import { VSlider, hsla } from "./visualia.js";
const a = $ref(0);
</script>

<template>
  <h1>Hello Visualia</h1>
  <VSlider v-model="a" />
  <br />
  <input type="range" v-model="a" />
  <br />
  {{ hsla(a) }}
  <br />
  <svg width="200" height="200">
    <circle cx="100" cy="100" r="50" :fill="hsla(a)" />
  </svg>
</template>
