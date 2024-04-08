<script setup lang="ts">
import { ref } from 'vue';
import { useCommentStore } from '@/entities/comment';
import type { IComment } from '@/entities/comment/model/types/comment';
import type { ITask } from '@/features/addTask';

const props = defineProps<{
	task: ITask;
}>();

const commentStore = useCommentStore();
const value = ref('');
const isCreate = ref(false);

const toggleEditor = () => {
	isCreate.value = true;
};

const addComment = async () => {
	if (value.value) {
		if (props.task.id !== undefined) {
			const comment: IComment = {
				id: 0,
				content: value.value,
				taskId: props.task.id
			};

			await commentStore.createComment(comment);
		}
	}

	value.value = '';
	isCreate.value = false;
};


</script>

<template>
	<p-input-text @click="toggleEditor" v-if="!isCreate" class="editor-input" placeholder="Добавить комментарий" />
	<div v-else class="editor">
		<p-editor v-model="value" editorStyle="height: 100px"></p-editor>
		<p-button @click="addComment" class="btn">Добавить</p-button>
	</div>
</template>

<style scoped>
.editor {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}

.editor-input {
	height: 50px;
}

.btn {
	margin-left: auto;
}
</style>
