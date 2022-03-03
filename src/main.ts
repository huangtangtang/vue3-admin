import { createApp } from 'vue'
import router from './router/index';
import store from './store'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import initSvgIcon from '@/icons/index'
// element-plus
import installElementPlus, { Size } from './plugins/element'
// 挂载到vue实例上
import { ElMessageBox, ElMessage, ElNotification } from 'element-plus'

createApp(App)
    .use(store)
    .use(installElementPlus)
    .use(initSvgIcon)
    .use(router)
    .mount('#app')


// vue实例上挂载属性类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $confirm: typeof ElMessageBox.confirm;
    $alert: typeof ElMessageBox.alert;
    $prompt: typeof ElMessageBox.prompt;
    $ELEMENT: {
      size:Size
    }
  }
}