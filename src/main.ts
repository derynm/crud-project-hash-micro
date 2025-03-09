import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToastPlugin from './plugins/toast'

const app = createApp(App)

app.use(router)
app.use(ToastPlugin)

app.mount('#app')
