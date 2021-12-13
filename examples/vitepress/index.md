<script setup>
const a = $ref(0);
//const b = $computed(() => hsla(a, 100))
</script>

# Vitepress

<VSlider v-model="a" />

<input type="range" v-model="a" />

{{ hsla(a) }}

<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" :fill="hsla(a)" />
</svg>