<script setup>
import { ref } from 'vue'
import { VSlider, hsla } from "visualia2";

const a = ref(0);
</script>

<template>
  <VSlider v-model="a" />
  <br />
  <input type="range" v-model="a" /> 
  <br />
  {{ hsla(a) }}
</template>

