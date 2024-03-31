<template>
	<ul class="list">
		<p-card
			v-for="task in taskStore.tasks"
			:key="task.id"
			class="card"
			body-style="display: flex; align-items: center; height: 35px"
			shadow="hover"
		>
			<template #content>
				<div class="item">
					<div class="item-checkbox">
						<p-checkbox @change="saveEdited(task)" v-model="task.completed" :binary="true" />
					</div>

					<p @click="toggleEdit">{{ task.name }}</p>
					<div class="item-buttons">
						<p-button rounded raised icon="pi pi-pencil" type="success" />
						<p-button
							severity="danger"
							rounded
							raised
							icon="pi pi-trash"
							@click="deleteTask(task)"
							type="danger"
						/>
					</div>
				</div>
			</template>
		</p-card>
	</ul>
</template>

<script lang="ts">
import { useTaskStore, type ITask } from '@/features/addTask';
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		const taskStore = useTaskStore();

		return { taskStore };
	},

	data() {
		return {
			isEdit: false,
			readonly: true,
			checked: false
		};
	},

	methods: {
		async deleteTask(task: ITask) {
			if (!task.id) return;

			await this.taskStore.deleteTask(task.id);
			await this.taskStore.getTasks(task.userId);
		},

		async saveEdited(task: ITask) {
			await this.taskStore.updateTask(task);
			await this.taskStore.getTasks(task.userId);
		}
	}
});
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.item {
	display: flex;
	align-items: center;
}

.item-checkbox {
	margin-right: 15px;
}

.item-buttons {
	margin-left: auto;
	display: flex;
	gap: 10px;
}

.card {
	cursor: pointer;
}

.btn {
	margin-left: auto;
}

.btn-container {
	display: flex;
	margin-left: auto;
}
</style>
