<template>
	<div v-if="favoriteQuizzes.length > 0">
		<h2>Favorite Quizzes</h2>
		<ion-card v-for="quiz in favoriteQuizzes" :key="quiz.id" @click="navigateToQuiz()">
			<img class="p-4" :src="quiz.img" alt="" />
			<ion-card-header>
				<div class="text-white">
					<ion-card-title>{{ quiz.name }}</ion-card-title>
				</div>
				<ion-card-subtitle>{{ quiz.name }}</ion-card-subtitle>
			</ion-card-header>
			<ion-card-content class="flex">
				<div class="w-1/2">{{ quiz.questions.length }} questions</div>

				<div class="w-1/2">
					<div @click.stop="removeFromFavorites(quiz)">
						<ion-icon
							class="text-[20px]"
							aria-hidden="true"
							:icon="heart"
							:style="{ color: quiz.isFavorite ? 'red' : 'black' }"
						></ion-icon>
					</div>
				</div>
			</ion-card-content>
		</ion-card>
	</div>
	<p v-else>No quizes favorited</p>
</template>
<script setup>
	import {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonCardContent,
		IonIcon,
	} from '@ionic/vue';
	import { ref } from 'vue';
	import { heart } from 'ionicons/icons';
	import { useStore } from 'vuex';

	let favoriteQuizzes = JSON.parse(localStorage.getItem('favoriteQuizzes')) || [];
	console.log(favoriteQuizzes.value);

	const store = useStore();
	// Function to remove a quiz from favorites
	const removeFromFavorites = (quiz) => {
		store.dispatch('removeFavorite', quiz.id);
		localStorage.removeItem(`quiz-${quiz.id}-isFavorite`);
	};
</script>
