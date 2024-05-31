<template>
	<ion-card>
		<ion-card-content>
			<ion-item>
				<ion-label>Question {{ CurrentQuestion }} of {{ questionLength }}</ion-label>
				<ion-progress-bar :value="progress" color="primary"></ion-progress-bar>
			</ion-item>
		</ion-card-content>
	</ion-card>
</template>

<script setup>
	import { IonCard, IonItem, IonCardContent, IonLabel, IonProgressBar } from '@ionic/vue';
	import { defineProps, computed } from 'vue';

	const props = defineProps({
		CurrentQuestion: {
			type: Number,
			required: true,
		},
		questionLength: {
			type: Number,
			required: true,
		},
		showResult: {
			type: Boolean,
			required: true,
		},
	});

	const progress = computed(() => {
		if (props.questionLength === 0) {
			return 0;
		}
		if (props.showResult === true) {
			return 1;
		}
		// Calculate progress based on the last completed question
		return (props.CurrentQuestion - 1) / props.questionLength;
	});
</script>
