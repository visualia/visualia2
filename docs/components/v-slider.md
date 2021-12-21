<script setup>
const x = $ref(0);
</script>

# v-slider

`<v-slider />` is a component that changes a numeric variable with a slider.

#### Usage with script setup

```md
<script setup>
const x = $ref(0);
</script>

<v-slider v-model="x" />

> The value of x is {{ x }}
```

#### Usage with global variable

To animate a global variable, you need to prefix the model name with `v`, for example `v.x`.

You can use that variable to control the SVG `<circle />` position on the page (or anything, really).

```md
<v-svg width="400" height="100">
  <circle :cx="v.x" cy="50" r="50" />
</v-svg>

<v-slider v-model="v.x" />

> The value of x is {{ v.x }}
```

#### Setting attributes

Since `<v-slider />` is a lightweight wrapper around `<input type="range">` so all the [input element attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range), including `min`, `max` and `step` also work.

```md
<v-svg width="400" height="100">
  <circle :cx="v.x2" cy="50" r="50" />
</v-svg>

<v-slider v-model="v.x2" max="400" step="100" />

> The value of x2 is {{ v.x2 }}
```

Note that step attribute can also be set to `step="any"` that makes slider to emit floating point numbers for those _smooooooth_ animations.

```md
<v-svg width="400" height="100">
  <circle :cx="v.x3" cy="50" r="50" />
</v-svg>

<v-slider v-model="v.x3" max="400" step="any" />

> The value of x3 is <br /> {{ v.x3 }}
```
