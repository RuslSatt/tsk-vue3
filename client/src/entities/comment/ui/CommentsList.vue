<script setup lang="ts">
import { useCommentStore } from '@/entities/comment';

const commentStore = useCommentStore();

</script>

<template>
	<ul class="list">
		<p-panel :key="comment.id" v-for="comment in commentStore.comments">
			<template #header>
				<div class="header">

				</div>
			</template>
			<template #icons>
				<button>
					<span class="pi pi-cog"></span>
				</button>
			</template>
			<p v-html="comment.content"></p>
		</p-panel>
	</ul>
</template>

<style scoped>
.list {
	height: 100%;
	width: 100%;
}
</style>