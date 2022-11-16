import { createApp } from "vue";

// element-plus: https://element-plus.gitee.io/zh-CN/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(ElementPlus);

app.use(router);

app.mount("#app");
