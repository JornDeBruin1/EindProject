<template>
	<div class="w-full bg-gray-200">
		<ion-card>
			<img class="p-4" :src="quiz.img" alt="" />
			<ion-card-header>
				<ion-card-title>{{ quiz.name }}</ion-card-title>
				<ion-card-subtitle>{{ quiz.name }}</ion-card-subtitle>
			</ion-card-header>

			<ion-card-content>
				Here's a small text description for the sport content. Nothing more, nothing less.
			</ion-card-content>
		</ion-card>
	</div>
</template>

<script setup>
	import {
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
	} from '@ionic/vue';
	import { defineProps } from 'vue';
	import { useRouter } from 'vue-router';

	const { quiz } = defineProps(['quiz']);
</script>
