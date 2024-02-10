<template>
	<p-menu
		style="
			flex: 0 0 240px;
			background-color: var(--surface-300);
			position: relative;
			transition: 0.15s;
			border-radius: 0;
			border: 0;
		"
		class="sidebar"
		:model="items"
	>
	</p-menu>
</template>

<script setup lang="ts">
import { SidebarItems } from '../model/items';

const items = SidebarItems;
</script>

<style scoped>
.p-menu {
	flex: 0 0 240px;
	background-color: var(--surface-300);
	position: relative;
	transition: 0.15s;
	border-radius: none;
}

.hide {
	flex: 0 0 0;
}
</style>
