import "./assets/scss/theme.scss"
import "primevue/resources/themes/soho-dark/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import PrimeVue from "primevue/config"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount("#app")
