import AuthView from '@/pages/AuthPage';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: AuthView
		}
	]
});

export default router;
