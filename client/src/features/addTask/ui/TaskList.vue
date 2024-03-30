<template>
	<ul class="list">
		<li v-for="task in store.tasks" :key="task.id" class="item">
			<input readonly="true" v-model="task.name" class="text" type="text" />
			<div class="btn-container">
				<button class="btn green">Edit</button>
				<button class="btn">Delete</button>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/features/addTask';
const store = useTaskStore();
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.item {
	background-color: var(--bluegray-200);
	min-height: 30px;
	display: flex;
	align-items: center;
	padding: 5px;
	border-radius: 5px;
}

.text {
	background-color: var(--bluegray-200);
	border: none;
}

.btn-container {
	display: flex;
	gap: 10px;
	margin-left: auto;
}

.btn {
	padding: 5px;
	background-color: var(--bluegray-500);
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
	color: #fafafa;
}

.btn:hover {
	background-color: var(--bluegray-600);
}
</style>
