<template>
	<ion-card>
		<ion-card-header>
			<ion-card-subtitle></ion-card-subtitle>
			<ion-card-title>{{ question.title }}</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			<ion-radio-group>
				<ion-item v-for="option in question.options" :key="option.id">
					<ion-label>{{ option.label }}</ion-label>
					<ion-radio :value="option.text"> {{ option.text }}</ion-radio>
				</ion-item>
			</ion-radio-group>
		</ion-card-content>
	</ion-card>
</template>

<script setup>
	import {
		IonCard,
		IonItem,
		IonCardContent,
		IonRadio,
		IonLabel,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonRadioGroup,
		IonIcon,
	} from '@ionic/vue';
	import { defineProps, defineEmits } from 'vue';
	const { question } = defineProps(['question']);
	const emit = defineEmits(['selectOption']);
	const emitSelectedOption = (isCorrect) => {
		emit('selectOption', isCorrect);
	};
</script>
