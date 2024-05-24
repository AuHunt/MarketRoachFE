import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(vuetify)
app.component('ApexChart', VueApexCharts)
app.mount('#app')
