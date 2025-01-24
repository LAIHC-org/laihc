import 'bootstrap/dist/css/bootstrap.min.css' // Importación de Bootstrap CSS
import 'bootstrap' // Importa el JavaScript de Bootstrap
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
