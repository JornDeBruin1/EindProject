<template>
	<ion-page id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Quizes</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
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
