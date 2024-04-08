<template>
	<div class="editor">
		<p-editor v-model="value" editorStyle="height: 100px"></p-editor>
		<p-button @click="addComment" class="btn">Добавить</p-button>
	</div>
</template>

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

const addComment = async () => {
	if (props.task.id !== undefined) {
		const comment: IComment = {
			content: value.value,
			taskId: props.task.id
		};

		await commentStore.createComment(comment);
	}
};
</script>

<style scoped>
.editor {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}

.btn {
	margin-left: auto;
}
</style>
