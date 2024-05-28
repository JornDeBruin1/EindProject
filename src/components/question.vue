<template>
	<ion-card>
		<ion-card-header>
			<ion-card-subtitle></ion-card-subtitle>
			<ion-card-title>{{ question.title }}</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			<ion-radio-group>
				<ion-item
					v-for="option in question.options"
					:key="option.id"
					@click="emitSelectedOption(option.isCorrect)"
				>
					<ion-label>{{ option.label }}</ion-label>
					<ion-label :value="option.text"> {{ option.text }}</ion-label>
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
	} from '@ionic/vue';
	import { defineProps, defineEmits, ref } from 'vue';
	//vraag en antwoorden op halen uit de json
	const { question } = defineProps(['question']);
	const selectedOption = ref(null);
	//kijk voor geselecteerde optie om te kijken of het antwoord goed is
	const emit = defineEmits(['selectOption']);
	const emitSelectedOption = (isCorrect) => {
		emit('selectOption', isCorrect);
	};

	const handleClick = (option) => {
		selectedOption.value = option;
	};
</script>
