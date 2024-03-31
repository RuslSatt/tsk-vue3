import { app } from '@/main';

import { ElButton, ElCol, ElDialog, ElIcon, ElMenu, ElMenuItem, ElMenuItemGroup, ElRow, ElSubMenu } from 'element-plus';
import { ElInput } from 'element-plus';
import { ElCard } from 'element-plus';

export function registrationComponents() {
	app.component('el-button', ElButton);
	app.component('el-input', ElInput);
	app.component('el-card', ElCard);
	app.component('el-dialog', ElDialog);
	app.component('el-menu', ElMenu);
	app.component('el-sub-menu', ElSubMenu);
	app.component('el-icon', ElIcon);
	app.component('el-col', ElCol);
	app.component('el-row', ElRow);
	app.component('el-menu-item', ElMenuItem);
	app.component('el-menu-item-group', ElMenuItemGroup);
}
