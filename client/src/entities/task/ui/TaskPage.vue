<template>
	<div @click="closeItems" v-if="taskStore.selectedTask" :class="{ open: taskStore.isOpenPage }" class="task">
		<header class="task__header">
			<p-button @click="closePage" text icon="pi pi-angle-double-right"></p-button>
		</header>
		<div class="task__content">
			<div class="content__item_title">
				<input @input="editTask" v-model="taskStore.selectedTask.name" />
			</div>
			<div class="content__item">
				<span class="item__name">Дата</span>
				<div @click.stop="toggleCalendar" class="item__field">
					<div class="item__field_value">
						{{ taskStore.selectedTask.deadline?.toLocaleString() }}
					</div>
					<p-calendar
						class="item__value_calendar"
						:class="{ open: open }"
						dateFormat="dd.mm.yy"
						v-model="taskStore.selectedTask.deadline"
						@update:modelValue="editTask"
						inline
					></p-calendar>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/features/addTask';
import { ref } from 'vue';

const taskStore = useTaskStore();

const open = ref(false);

const closePage = () => (taskStore.isOpenPage = false);

const editTask = async () => {
	if (!taskStore.selectedTask) return;
	await taskStore.updateTask(taskStore.selectedTask);
};

const toggleCalendar = () => {
	open.value = !open.value;
};

const closeItems = () => {
	open.value = false;
};
</script>

<style scoped>
.task {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 100;
	width: 50%;
	height: 100%;
	background-color: var(--surface-100);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	transform: translateX(100%);
	transition: transform 0.3s;
}

.task.open {
	transform: translateX(0%);
}

.task__header {
	height: 40px;
	display: flex;
	align-items: center;
	padding: 5px;
	margin-bottom: 20px;
}

.task__content {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 10px 40px;
	gap: 10px;
}

.content__item_title {
	font-size: 32px;
	margin-bottom: 20px;
}

.content__item {
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 5px;
	height: 40px;
	width: 100%;
}

.item__field {
	position: relative;
	width: 100%;
	height: 100%;
	cursor: pointer;
}

.item__field_value {
	width: 100%;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: 0.3s;
	padding: 0 5px;
}

.item__field_value:hover {
	background-color: var(--surface-200);
}

.item__value_calendar {
	display: none;
	position: absolute;
	margin-top: 5px;
	width: 300px;
}

.item__value_calendar.open {
	display: block;
}
</style>
