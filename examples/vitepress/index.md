<script setup>
const a = $ref(0);
</script>

```vue
<script setup>
const a = $ref(0);
</script>

# Hello world!
```

# Hello Visualia

<VSlider v-model="a" />

{{ hsla(a) }}

<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" :fill="hsla(a)" />
</svg>
