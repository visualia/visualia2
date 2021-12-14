<script setup lang="ts">
import { VSlider, VMath, hsla } from "./visualia.js";
const h = $ref(0);
const fill = $computed(() => hsla(h));
</script>

<template>
  <h1>Hello Visualia</h1>
  <VMath>h = {{ h }} \degree</VMath>
  <br />
  {{ hsla(h) }}
  <br />
  <VSlider v-model="h" to="360" />
  <br />
  <svg width="200" height="200">
    <circle cx="100" cy="100" r="50" :fill="fill" />
  </svg>
</template>

<style>
@import url("https://unpkg.com/katex/dist/katex.css");
</style>
