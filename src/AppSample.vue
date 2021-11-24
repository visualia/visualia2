<script setup>
import { hsla, VSlider } from "./visualia.js";
let radius = $ref(50);
let multipliers = [1, 1.5, 2];
let color = $computed(() => hsla(radius));
</script>

<template>
  <VSlider v-model="radius" />
  <input type="range" v-model="radius" />
  <svg width="200" height="200">
    <circle
      v-for="multiplier in multipliers"
      cx="100"
      cy="100"
      :r="radius * multiplier"
      opacity="0.5"
      :fill="color"
    />
  </svg>
</template>
