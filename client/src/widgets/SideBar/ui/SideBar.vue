<template>
	<el-row>
		<el-col :span="12">
			<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				<el-menu-item index="1">
					<el-icon><icon-menu /></el-icon>
					<span>Главная</span>
				</el-menu-item>
				<el-menu-item index="2">
					<el-icon><document /></el-icon>
					<span>Задачи</span>
				</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu } from '@element-plus/icons-vue';
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>

<style scoped></style>
