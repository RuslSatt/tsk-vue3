export interface ISidebarItem {
	label: string;
	icon?: string;
	path?: string;
}

export const SidebarItems = [
	{
		label: 'Главная',
		icon: 'pi pi-home'
	},
	{
		label: 'Задачи',
		icon: 'pi pi-check-circle'
	}
];
