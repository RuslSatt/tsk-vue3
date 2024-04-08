<script setup lang="ts">
import { type IComment, useCommentStore } from '@/entities/comment';
import { type Ref, ref } from 'vue';

const commentStore = useCommentStore();

const handlerDeleteComment = async (id: number) => {
	await commentStore.deleteComment(id);
};

const onEditComment = async (comment: IComment) => {
	isEdit.value = comment.id;
	value.value = comment.content;
};

const handlerSaveComment = async (comment: IComment) => {
	comment.content = value.value;
	await commentStore.editComment(comment);
	isEdit.value = null;
};

const handlerCancelEdit = (comment: IComment) => {
	isEdit.value = null;
	value.value = comment.content;
};

const isEdit: Ref<number | null> = ref(null);
const value = ref('');

</script>

<template>
	<ul class="list">
		<p-panel class="comment" :key="comment.id" v-for="comment in commentStore.comments">
			<template #header>
				<div class="header">

				</div>
			</template>
			<template #icons>
				<div class="buttons">
					<button @click="onEditComment(comment)">
						<span class="pi pi-pencil"></span>
					</button>
					<button @click="handlerDeleteComment(comment.id)">
						<span class="pi pi-trash"></span>
					</button>
				</div>

			</template>
			<p v-if="isEdit !== comment.id" v-html="comment.content"></p>
			<div v-else class="editor">
				<p-editor v-model="value" editorStyle="height: 50px"></p-editor>
				<div class="editor-buttons">
					<p-button @click="handlerCancelEdit(comment)">Отмена</p-button>
					<p-button @click="handlerSaveComment(comment)">Сохранить</p-button>
				</div>
			</div>
		</p-panel>
	</ul>
</template>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	margin-top: auto;
}

.comment {
	background-color: transparent;
	border: 1px solid var(--surface-300);
}

.buttons {
	display: flex;
	align-items: center;
	gap: 10px;
}

.editor {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}

.editor-buttons {
	margin-left: auto;
	display: flex;
	align-items: center;
	gap: 10px;
}
</style>