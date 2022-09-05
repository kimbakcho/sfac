import { createApp } from 'vue'
import { Quasar } from 'quasar'

import { createPinia } from 'pinia'
import quasarLang from 'quasar/lang/ko-KR'
import App from './App.vue'
import router from './router'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import '@/assets/customFont/css/spac.css'

const app = createApp(App)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
})


app.use(createPinia())
app.use(router)

app.mount('#app')
