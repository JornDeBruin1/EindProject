<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Quizes</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header class="shadow-lg" collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Quizes</ion-title>
				</ion-toolbar>
			</ion-header>

			<HomeContainer name="Home page" />
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
</script>
