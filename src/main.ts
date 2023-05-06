import './assets/scss/theme.scss'
import "primevue/resources/themes/md-dark-indigo/theme.css";     
import "primevue/resources/primevue.min.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
