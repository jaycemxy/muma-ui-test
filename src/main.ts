import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Joyce from './components/Joyce.vue'
import Joyce2 from './components/Joyce2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path:'/', component: Joyce},
        {path:'/xxx', component: Joyce2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
