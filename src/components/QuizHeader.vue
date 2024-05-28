<template>
	<ion-card>
		<ion-card-content>
			<ion-item>
				<ion-label>Question {{ CurrentQuestion }} of {{ questionLength }} </ion-label>
				<ion-progress-bar color="primary"></ion-progress-bar>
			</ion-item>
		</ion-card-content>
	</ion-card>
</template>

<script setup>
	import { IonCard, IonItem, IonCardContent, IonLabel, IonProgressBar } from '@ionic/vue';
	import { defineProps } from 'vue';

	const { questionLength, CurrentQuestion } = defineProps([
		'CurrentQuestion',
		'questionLength',
	]);
</script>
