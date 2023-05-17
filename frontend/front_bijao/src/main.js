import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//integramos boostrap 5
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const app = createApp(App)

app.use(router)

app.mount('#app')
