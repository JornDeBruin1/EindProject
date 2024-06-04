<template>
	<ion-page id="main-content" class="bg-gray-200">
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Quizzes</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<HomeContainer
				v-for="quiz in quizzes"
				:key="quiz.id"
				:quiz="quiz"
				:favoriteQuizzes="favoriteQuizzes"
				@update-favorite="updateFavorite"
			/>
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
	import { ref, onMounted, computed } from 'vue';
	import quizzesData from '@/data/quiz.json';
	import HomeContainer from '@/components/HomeContainer.vue';

	const quizzes = ref(
		quizzesData.map((quiz) => {
			const favoriteQuizzes = JSON.parse(localStorage.getItem('favoriteQuizzes')) || [];
			quiz.isFavorite = favoriteQuizzes.includes(quiz.id);
			return quiz;
		})
	);
	const favoriteQuizzes = ref([]);

	// const favoriteQuizzesData = computed(() => {
	// 	return quizzes.value.filter((quiz) => favoriteQuizzes.value.has(quiz.id));
	// });
	const updateFavorite = (quizId) => {
		const quiz = quizzes.value.find((quiz) => quiz.id === quizId);
		if (quiz) {
			quiz.isFavorite = !quiz.isFavorite;
			if (quiz.isFavorite) {
				favoriteQuizzes.value.push(quiz.id);
			} else {
				const index = favoriteQuizzes.value.indexOf(quiz.id);
				if (index !== -1) {
					favoriteQuizzes.value.splice(index, 1);
				}
			}
			localStorage.setItem('quizzes', JSON.stringify(quizzes.value));
			localStorage.setItem('favoriteQuizzes', JSON.stringify(favoriteQuizzes.value));
		}
	};
	onMounted(() => {
		const storedFavoriteQuizzes = localStorage.getItem('favoriteQuizzes');
		if (storedFavoriteQuizzes) {
			favoriteQuizzes.value = JSON.parse(storedFavoriteQuizzes);
		}
		quizzes.value.forEach((quiz) => {
			quiz.isFavorite = favoriteQuizzes.value.includes(quiz.id);
		});
	});
</script>
<style scoped>
	ion-toolbar {
		--tw-bg-opacity: 1;
		--background: rgb(229 231 235 / var(--tw-bg-opacity));
	}
</style>
