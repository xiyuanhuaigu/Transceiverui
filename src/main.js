import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import Axios from 'axios'
const app = createApp(App)
app.config.globalProperties.$http = Axios
// app.config.globalProperties.$utils = Utils

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //这里判断用户是否登录，验证本地存储是否有token
        if (cookies.get('token').whether_login!='success') {// 判断当前的token是否存在
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
  })

  app.use(router);
  app.mount('#app')
