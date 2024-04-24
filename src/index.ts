import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify()

app.use(vuetify)
app.mount('#app')
