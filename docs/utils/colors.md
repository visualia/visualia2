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

```html
Hover over the colors to see how `h` value changes

<svg :width="360 * 2" height="40">
  <rect
    v-for="h in range(0,360)"
    :x="h"
    y="0"
    width="2"
    height="40"
    :fill="hsl(h,100,50)"
    v-on:mouseover="v.h = h"
  />
</svg>

> `hsl({{ v.h ?? 0 }},100,50)`
```

#### Example: Changing saturation

```html
Hover over the colors to see how `s` value changes

<svg :width="100 * 2" height="40">
  <rect
    v-for="s in range(0,100)"
    :x="s"
    y="0"
    width="2"
    height="40"
    :fill="hsl(0,s,50)"
    v-on:mouseover="v.s = s"
  />
</svg>

> `hsl(0,{{ v.s ?? 0 }},50)`
```

#### Example: Changing lightness

```html
Hover over the colors to see how `l` value changes

<svg :width="100 * 2" height="40">
  <rect
    v-for="l in range(0,100)"
    :x="l"
    y="0"
    width="2"
    height="40"
    :fill="hsl(0,100,l)"
    v-on:mouseover="v.l = l"
  />
</svg>

> `hsl(0,100,{{ v.l ?? 0 }})`
```
