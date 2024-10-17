// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // index.js在vue的目录下相当于 python包中的__init__.py，所以可以不写index.js路径

const app = createApp(App)

app.use(router)

app.mount('#app')
