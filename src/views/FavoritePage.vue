<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Favorites</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<FavoriteContainer :quizzes="favoriteQuizzes" />
		</ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonButtons,
		IonMenuButton,
	} from '@ionic/vue';
	import { ref, computed } from 'vue';
	import quiz from '@/data/quiz.json';
	import { useStore } from 'vuex';
	import FavoriteContainer from '../components/FavoriteContainer.vue';

	const store = useStore();

	const favoriteQuizzes = computed(() => {
		return store.state.favoriteQuizzes.map((id) => quiz.find((q) => q.id === id));
	});
</script>
