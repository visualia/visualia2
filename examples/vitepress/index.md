<script setup>
const a = $ref(100)
</script>

# Hello

<v-slider v-model="a" />

{{ a }}

<v-slider v-model="v.a" />

{{ v.a }}

```md
# Hello

<v-slider v-model="v.a" />

{{ v.a }}
```
