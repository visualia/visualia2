# Getting Started

Visualia is a modular Javascript / Typescript library for creating interactive experiences in the browser. It provides multiple options for installation.

## Vitepress

TODO

## Vite

To get started with Visualia and Vite, use the standard [Vite installation](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). Choose either `vue` or `vue-ts` project when setting up a project.

```bash
npm init vite@latest
```

Next, install Visualia:

```bash
npm install visualia2
```

Next, modify the `/src/main.js` as follows:

<<< @/../examples/vite/src/main.js{3,6}

Optionally, modify the `/vite.config.js` as noted below -- this allows to use the shorter syntax for reactive variables.

<<< @/../examples/vite/vite.config.js{7}

Finally, edit the `/src/App.vue` to use Visualia's component and utilities:

<<< @/../examples/vite/src/App.vue

## Javasript

TODO

## ESM Javascript

TODO

## Node

TODO

## Deno

TODO
