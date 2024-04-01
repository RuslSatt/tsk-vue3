<template>
	<div class="sidebar">
		<ul class="sidebar__list">
			<li class="sidebar__item">
				<router-link to="/main" class="sidebar__item-link">
					<i class="pi pi-home"></i>
					<span>Главная</span>
				</router-link>
			</li>
			<li class="sidebar__item">
				<router-link to="/projects" class="sidebar__item-link">
					<i class="pi pi-th-large"></i>
					<span>Проекты</span>
				</router-link>
			</li>
			<li class="sidebar__item">
				<router-link to="/tasks" class="sidebar__item-link">
					<i class="pi pi-list"></i>
					<span>Задачи</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.sidebar {
	width: 200px;
	overflow: hidden;
	height: 100%;
	border-right: 1px solid var(--surface-300);
}

@media (max-width: 778px) {
	.sidebar {
		position: absolute;
		transform: translateX(-200px);
	}
}

.sidebar__list {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 10px;
	gap: 10px;
}

.sidebar__item-link {
	display: flex;
	width: 100%;
	gap: 10px;
	padding: 10px;
	border-radius: 5px;
	transition: background-color 0.3s;
	color: var(--text-color);
	text-decoration: none;
}

.sidebar__item-link:hover {
	background-color: var(--highlight-bg);
	color: var(--highlight-text-color);
}
</style>
