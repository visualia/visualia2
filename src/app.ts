import { createApp, h, Suspense } from 'vue'
import App from './App.vue'
import { Visualia } from './visualia';

const app = createApp(() => h(Suspense, h(App)));
app.use(Visualia)
app.mount('#app')
