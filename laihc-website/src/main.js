import 'bootstrap/dist/css/bootstrap.min.css' // Importación de Bootstrap CSS
import 'bootstrap' // Importa el JavaScript de Bootstrap
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);

app.mount('#app')
