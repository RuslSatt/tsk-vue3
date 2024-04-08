import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import type { IComment } from '../types/comment';
import { CommentService } from '../services/commentServices';

export const useCommentStore = defineStore('comment', () => {
	const comments: Ref<IComment[]> = ref([]);
	// const content: Ref<string> = ref('');

	async function createComment(comment: IComment) {
		const { content, taskId } = comment;

		const createdComment = await CommentService.create(content, taskId);
		if (createdComment) comments.value.push(createdComment);
	}

	async function deleteComment(id: number) {
		await CommentService.delete(id);
	}

	async function getComments(taskId: number) {
		comments.value = await CommentService.get(taskId);
	}

	return { comments, createComment, getComments, deleteComment };
});
