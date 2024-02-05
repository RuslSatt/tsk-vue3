import { createApp } from 'vue';
import '@/app/styles/main.css';
import App from './app/App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import { registrationComponents } from './shared/ui/components';

export const app = createApp(App);

app.use(router);
app.use(PrimeVue);

registrationComponents();

app.mount('#app');
