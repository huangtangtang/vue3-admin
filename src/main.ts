import { createApp } from "vue";
import router from "./router";
import store, { key } from "./store"; // store里注入key 
import App from "./App.vue";
// 初始化css 重置css默认样式
import "normalize.css/normalize.css";
// 全局 css
import "@/styles/index.scss";
// 引入svg icon
import "virtual:svg-icons-register";
import initSvgIcon from "@/icons/index";
// element-plus
import installElementPlus from "./plugins/element";

const app = createApp(App);
app.use(installElementPlus);
app.use(initSvgIcon);
app.use(router);
app.use(store, key); // key 可以认为是store加密解密的密钥
app.mount("#app");
