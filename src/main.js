import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

// Pinia instance'ını oluştur ve `pinia-plugin-persistedstate` eklentisini kullan
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

// Pinia ve router'ı Vue uygulamasına ekle
app.use(pinia);
app.use(router);

app.mount("#app");
