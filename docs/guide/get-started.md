# Getting Started

## Vite

To install Visualia and Vite, it is recommended to use a standard Vite [installation instructions](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) when you should choose either `vue` or `vue-ts` project:

```
npm init vite@latest
```

Next, install Visualia:

```
npm install visualia2
```

Next, modify the `/src/main.js` as follows:

<<< @/../examples/vite/src/main.js{3,6}

Optionally, modify the `/vite.config.js` a below, this allows to use the shorter syntax for reactive variables.

<<< @/../examples/vite/vite.config.js{8}

Finally, edit the `/src/App.vue` to use Visualia's component and utilities:

<<< @/../examples/vite/src/App.vue

## Deno

<<< @/../examples/deno/index.ts
