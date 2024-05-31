<template>
	<ion-menu content-id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-title>Quiz menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="m-6 text-2xl flex flex-wrap flex-col">
				<a class="text-black" href="/tabs/home">
					<ion-icon class="pr-4" aria-hidden="true" :icon="home"></ion-icon>
					<ion-label class="text-2xl">Home</ion-label>
				</a>
				<a class="text-black" href="/tabs/favorite">
					<ion-icon class="pr-4" aria-hidden="true" :icon="heart"></ion-icon>
					<ion-label class="text-2xl">Favorite</ion-label>
				</a>
				<a class="text-black" href="/tabs/setting">
					<ion-icon class="pr-4" aria-hidden="true" :icon="cog"></ion-icon>
					<ion-label class="text-2xl">Settings</ion-label>
				</a>
			</div>
		</ion-content>
	</ion-menu>
	<ion-page id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Question</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<QuizHeader
				:CurrentQuestion="currentQuestionNumber"
				:questionLength="totalQuestions"
				:showResult="showResult"
			/>
			<Question
				v-if="!showResult"
				:question="quiz.questions[currentQuestionIndex]"
				@selectOption="onOptionSelected"
			/>
			<Result
				v-else
				:quizQuestionlength="quiz.questions.length"
				:numberOfCorrectAnswers="numberOfCorrectAnswers"
				:userAnswers="userAnswers"
			/>
		</ion-content>
	</ion-page>
</template>

<script setup>
	// All imports
	import Question from '../components/Question.vue';
	import QuizHeader from '../components/QuizHeader.vue';
	import Result from '../components/Result.vue';
	import q from '@/data/quiz.json';
	import { useRoute } from 'vue-router';
	import { home, heart, cog } from 'ionicons/icons';
	import { ref, computed } from 'vue';
	import {
		IonButtons,
		IonMenu,
		IonMenuButton,
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
		IonIcon,
		IonLabel,
	} from '@ionic/vue';

	// Get ID from route
	const route = useRoute();
	const quizId = parseInt(route.params.id);
	const quizes = ref(q);

	// Get quiz based on ID
	const quiz = computed(() => quizes.value.find((quiz) => quiz.id === quizId));
	const currentQuestionIndex = ref(0);
	const numberOfCorrectAnswers = ref(0);
	const showResult = ref(false);

	// Store user answers
	const userAnswers = ref([]);

	// Total number of questions
	const totalQuestions = computed(() => quiz.value.questions.length);

	// Current question number (1-based index)
	const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);

	const onOptionSelected = (isCorrect, selectedOption) => {
		const currentQuestion = quiz.value.questions[currentQuestionIndex.value];
		const correctOption = currentQuestion.options.find((option) => option.isCorrect);

		userAnswers.value.push({
			question: currentQuestion,
			selectedOption: selectedOption,
			correctOption: correctOption,
			isCorrect: isCorrect,
		});

		if (isCorrect) {
			numberOfCorrectAnswers.value++;
		}

		if (quiz.value.questions.length - 1 === currentQuestionIndex.value) {
			showResult.value = true;
		} else {
			currentQuestionIndex.value++;
		}
	};
</script>
