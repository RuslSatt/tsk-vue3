<template>
	<div class="sidebar" v-bind:class="{ hide: hide }">
		<sidebar-items></sidebar-items>
	</div>
</template>

<script setup lang="ts">
import SidebarItems from './SidebarItems.vue';

defineProps({
	hide: Boolean
});
</script>

<style scoped>
.sidebar {
	flex: 0 0 240px;
	background-color: var(--surface-300);
	position: relative;
	transition: 0.15s;
}

.hide {
	flex: 0 0 0;
}
</style>
