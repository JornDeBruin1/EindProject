<template>
	<ion-page>
		<ion-header class="bg-blue-500">
			<ion-toolbar>
				<ion-title class="bg-gray-200">Quizes</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header class="shadow-lg" collapse="condense">
				<ion-toolbar class="	">
					<ion-title size="large">Quizes</ion-title>
				</ion-toolbar>
			</ion-header>

			<HomeContainer
				v-for="quiz in quizes"
				:key="quiz.id"
				:quiz="quiz"
				name="Home page"
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
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
	} from '@ionic/vue';
	import HomeContainer from '@/components/HomeContainer.vue';
	import { ref } from 'vue';
	import q from '@/data/quiz.json';
	const quizes = ref(q);
</script>
<style scoped>
	ion-toolbar {
		--tw-bg-opacity: 1;
		--background: rgb(229 231 235 / var(--tw-bg-opacity));
		--color: black;
		--z-index: 20px;
	}
</style>
