import { vuetify } from './shared/ui/vuetify';
import { createApp } from 'vue';
import '@/app/styles/main.css';
import App from './app/App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(vuetify);

app.mount('#app');
