<template>
	<ion-content>
		<div class="w-full pl-5 flex flex-col justify-center">
			<h2>Quiz Completed!</h2>
			<p>
				You got {{ numberOfCorrectAnswers }} out of {{ quizQuestionlength }} questions
				correct.
			</p>
			<ion-list>
				<ion-item v-for="(answer, index) in userAnswers" :key="index">
					<ion-label>
						<h3>Question {{ index + 1 }}: {{ answer.question.title }}</h3>
						<p>
							Your answer:
							<p class="font-bold"
								:class="{
									'text-green-500': answer.isCorrect,
									'text-red-500': !answer.isCorrect,
								}"
								>{{ answer.selectedOption.text }}</p
							>
						</p>
						<p v-if="!answer.isCorrect">
							Correct answer:
							<p class="font-bold">{{ answer.correctOption.text }}</p>
						</p>
					</ion-label>
				</ion-item>
			</ion-list>
		</div>
	</ion-content>
</template>

<script setup>
	import { IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
	import { ref, defineProps } from 'vue';

	const props = defineProps({
		quizQuestionlength: Number,
		numberOfCorrectAnswers: Number,
		userAnswers: Array,
	});
</script>
