<template>
	<div class="task">
		<div class="task__content">
			<div class="content__name"></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.task {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2000;
	width: 50%;
	height: 100%;
	background-color: var(--surface-100);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	transform: translateX(0%);
	transition: transform 0.3s;
}
</style>
