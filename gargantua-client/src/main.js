// app
import { createApp } from 'vue'
import App from './App.vue'
// router
import { router } from './routes/index'
// v-sans
import 'vfonts/Lato.css'
// v-mono
import 'vfonts/FiraCode.css'
// i18n
import { createI18n } from 'vue-i18n'
import { messages } from './i18n/index'

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'zh',
  messages,
})

app.use(i18n)
app.use(router)
app.mount('#app')