import { app } from '@/main';

import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import Menu from 'primevue/menu';
import Editor from 'primevue/editor';
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Skeleton from 'primevue/skeleton';


export function registrationComponents() {
	app.component('p-checkbox', Checkbox);
	app.component('p-button', Button);
	app.component('p-input-text', InputText);
	app.component('p-dialog', Dialog);
	app.component('p-card', Card);
	app.component('p-password', Password);
	app.component('p-calendar', Calendar);
	app.component('p-menu', Menu);
	app.component('p-editor', Editor);
	app.component('p-panel', Panel);
	app.component('p-table', DataTable);
	app.component('p-table-column', Column);
	app.component('p-table-column-group', ColumnGroup);
	app.component('p-table-row', Row);
	app.component('p-skeleton', Skeleton);
}
