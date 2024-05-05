import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

const customDarkTheme = {
    dark: true,
    colors: {
        background: '#15202b',
        surface: '#15202b',
        primary: '#3f51b5',
        secondary: '#03dac6',
        error: '#f44336',
        info: '#2196F3',
        success: '#4caf50',
        warning: '#fb8c00',
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'dark', // Set default to dark
        themes: {
            customDarkTheme, // Custom theme
        },
    },
    components,
    directives,
})
