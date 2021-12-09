<script setup>
import { VSlider, VMath, hsla } from "./visualia.js";

let a = $ref(0);
</script>

<template>
  <VMath>a = \sqrt{ {{ a }} }</VMath>
  <br />
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

<style>
@import url("https://unpkg.com/katex/dist/katex.css");
</style>
