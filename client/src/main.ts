import { vuetify } from './shared/ui/vuetify';
import { createApp } from 'vue';
import App from './app/App.vue';

const app = createApp(App);

// app.use(router);

app.use(vuetify);

app.mount('#app');
