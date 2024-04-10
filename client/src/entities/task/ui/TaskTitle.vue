<template>
	<div v-if="taskStore.selectedTask" class="content__item_title">
		<textarea
			@change="onChangeComplete(taskStore.selectedTask)"
			@input="autoSize($event)"
			v-model="taskStore.selectedTask.name"
		/>
	</div>
</template>

<script setup lang="ts">
import { type ITask, useTaskStore } from '@/entities/task';

const taskStore = useTaskStore();

const onChangeComplete = async (task?: ITask) => {
	if (task) await taskStore.updateTask(task);
};

const autoSize = (e: Event) => {
	const target = e.target as HTMLElement;

	target.style.height = '5px';
	target.style.height = target.scrollHeight + 'px';
};
</script>

<style scoped>
.content__item_title textarea {
	text-wrap: wrap;
	font-size: 32px;
	width: 100%;
	height: 50px;
	overflow: hidden;
	padding: 5px;
	box-sizing: border-box;
	border: none;
	background-color: var(--surface-100);
	resize: none;
}
</style>
