import { app } from '@/main';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Menu from 'primevue/menu';

export function registrationComponents() {
	app.component('p-button', Button);
	app.component('p-input-text', InputText);
	app.component('p-password', Password);
	app.component('p-card', Card);
	app.component('p-menu', Menu);
}
