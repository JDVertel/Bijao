import { createApp } from 'vue';

import store from './store/index.js'

import App from "./App.vue";
import router from "./router";
//integramos boostrap 5
import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap.bundle.min.js";

// icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiHomeHeartFill } from "oh-vue-icons/icons";
//listado de iconos disponible
addIcons(RiHomeHeartFill);



const app = createApp(App);
app.use(router);
app.use(store);
app.component("v-icon", OhVueIcon);

app.mount("#app");

