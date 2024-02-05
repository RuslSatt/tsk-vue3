<template>
	<div class="view">
		<AuthForm></AuthForm>
	</div>
</template>

<script lang="ts" setup>
import AuthForm from '@/features/Auth';
</script>

<style scoped>
.view {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
