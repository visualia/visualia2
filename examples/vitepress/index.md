<script setup>
import { VSlider, hsla } from "visualia2";

const a = $ref(0);
const b = $computed(() => hsla(a, 100))
</script>

# Vitepress

<VSlider v-model="a" />

<input type="range" v-model="a" />

{{ b }}
