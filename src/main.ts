import { createApp } from 'vue' 
import App from './App.vue';
import router from './router/index';
import store from './store'
// element plus
import ElementPlus from 'element-plus';
// 初始化css 重置css默认样式
import 'normalize.css/normalize.css' 
// 全局css
import '@/styles/index.scss'
 
createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')



