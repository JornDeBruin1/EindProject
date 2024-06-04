<template>
	<div class="w-full">
		<ion-card @click="navigateToQuiz()">
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
					<div @click.stop="toggleFavorite()">
						<ion-icon
							class="text-[20px]"
							aria-hidden="true"
							:icon="heart"
							:class="isQuizFavorite(quiz) ? 'text-red-500' : 'text-black'"
							@click.stop="toggleFavorite"
						></ion-icon>
					</div>
				</div>
			</ion-card-content>
		</ion-card>
	</div>
</template>

<script setup>
	import { heart } from 'ionicons/icons';
	import { computed, defineProps, ref, watchEffect } from 'vue';
	import {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonCardContent,
		IonIcon,
	} from '@ionic/vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
	const props = defineProps({
		quiz: Object,
		favoriteQuizzes: Array,
	});
	const favoriteQuizzes = computed(() => store.state.favoriteQuizzes);

	// Check if a quiz is favorite
	const isQuizFavorite = (quiz) => {
		return favoriteQuizzes.value.some((favoriteQuiz) => favoriteQuiz.id === quiz.id);
	};
	let isFavorite = ref(
		props.favoriteQuizzes.includes(props.quiz.id) ||
			localStorage.getItem(`quiz-${props.quiz.id}-isFavorite`) === 'true'
	);
	watchEffect(() => {
		isFavorite.value =
			props.favoriteQuizzes.includes(props.quiz.id) ||
			localStorage.getItem(`quiz-${props.quiz.id}-isFavorite`) === 'true';
	});
	const router = useRouter();
	const navigateToQuiz = () => {
		router.push(`/tabs/quiz/${props.quiz.id}`);
	};
	const store = useStore();
	const toggleFavorite = () => {
		if (!isFavorite.value) {
			store.dispatch('addFavorite', props.quiz.id);
			localStorage.setItem(`quiz-${props.quiz.id}-isFavorite`, 'true');
			isFavorite.value = true;
		} else {
			store.dispatch('removeFavorite', props.quiz.id);
			localStorage.removeItem(`quiz-${props.quiz.id}-isFavorite`);
			isFavorite.value = false;
		}
	};
</script>
