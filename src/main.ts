import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'

import './assets/main.css'
import Aos from 'aos'

const app = createApp(App)

app.use(router)

app.mount('#app')
onMounted(() => {
    Aos.init();
});