<template>
	<p-calendar
		v-if="taskStore.selectedTask"
		class="calendar"
		:class="{ open: open }"
		dateFormat="dd.mm.yy"
		v-model="taskStore.selectedTask.deadline"
		@update:modelValue="editTask"
		inline
	></p-calendar>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/entities/task';

defineProps<{
	editTask: Function;
	open: boolean;
}>();

const taskStore = useTaskStore();
</script>

<style scoped>
.calendar {
	display: none;
	position: absolute;
	margin-top: 5px;
	width: 300px;
	z-index: 1000;
}

.calendar.open {
	display: block;
}
</style>
