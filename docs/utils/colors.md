# Colors

## hsl

Ouputs a CSS color string in [hsl() notation](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()>).

```ts
hsl(h: number, s: number, l: number): string
```

`hsl()` accepts following parameters:

`h` as **hue** ranging from 0 to 360
`s` as **saturation** from 0 to 100
`l` as **lightness** from 0 to 100

#### Example: Changing hue

```md
Hover over the colors to see how `h` value changes

<v-svg width="360" height="100">
  <rect v-for="h in range(0,360)" :x="h" y="0" width="1" height="100" :fill="hsl(h,100,50)" v-on:mouseover="v.h = h" />
</v-svg>

> `hsl({{ v.h ?? 0 }},100,50)`
```

#### Example: Changing saturation

```md
Hover over the colors to see how `s` value changes

<svg :width="100" height="100">
  <rect
    v-for="s in range(0,100)"
    :x="s"
    y="0"
    width="1"
    height="100"
    :fill="hsl(0,s,50)"
    v-on:mouseover="v.s = s"
  />
</svg>

> `hsl(0,{{ v.s ?? 0 }},50)`
```

#### Example: Changing lightness

```md
Hover over the colors to see how `l` value changes

<svg :width="100" height="100">
  <rect
    v-for="l in range(0,100)"
    :x="l"
    y="0"
    width="1"
    height="100"
    :fill="hsl(0,100,l)"
    v-on:mouseover="v.l = l"
  />
</svg>

> `hsl(0,100,{{ v.l ?? 0 }})`
```
