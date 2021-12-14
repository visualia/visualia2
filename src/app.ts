import { createApp, h, Suspense } from 'vue'
import App from './App.vue'

const app = createApp(() => h(Suspense, h(App)));
//app.use(Visualia)
app.mount('#app')
