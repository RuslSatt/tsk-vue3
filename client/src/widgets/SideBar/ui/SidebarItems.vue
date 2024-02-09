<template>
	<div>
		<ul>
			<li v-bind:key="item.label" v-for="item in items">
				<p-button link>{{ item.label }}</p-button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { SidebarItems } from '../model/items';

const items = SidebarItems;
</script>

<style scoped></style>
