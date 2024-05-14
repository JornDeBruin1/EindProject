import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes = [
	{
		path: '/',
		redirect: '/tabs/home',
	},
	{
		path: '/tabs/',
		component: TabsPage,
		children: [
			{
				path: '',
				redirect: '/tabs/home',
			},
			{
				path: 'home',
				component: () => import('@/views/HomePage.vue'),
			},
			{
				path: 'favorite',
				component: () => import('@/views/FavoritePage.vue'),
			},
			{
				path: 'setting',
				component: () => import('@/views/SettingPage.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
