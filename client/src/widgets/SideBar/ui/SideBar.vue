<template>
	<div class="sidebar" v-bind:class="{ hide: hide }"></div>
</template>

<script setup lang="ts">
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
