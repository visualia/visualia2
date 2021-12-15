<script setup lang="ts">
import { computed, ref } from "vue";

const {
  width = 400,
  height = 400,
  padding = 0,
  centered = false,
} = defineProps<{
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  centered?: boolean;
}>();

const size = computed(() => {
  const p = parseFloat(String(padding));
  const w = parseFloat(String(width)) + p * 2;
  const h = parseFloat(String(height)) + p * 2;
  const wb = centered
    ? `-${w / 2} -${h / 2} ${w} ${h}`
    : `-${p} -${p} ${w} ${h}`;
  const style = {
    maxWidth: `${w}px`,
  };
  return { w, h, wb, style };
});

const svgRef = ref(null);
</script>

<template>
  <p>
    <svg
      ref="svgRef"
      xmlns="http://www.w3.org/2000/svg"
      :view-box.camel="size.wb"
      :style="size.style"
    >
      <g ref="groupRef">
        <slot />
      </g>
    </svg>
  </p>
</template>
