<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Favorites</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<FavoriteContainer name="Favorite page" />
		</ion-content>
	</ion-page>
</template>

<script setup>
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
	// import FavoriteContainer from '@/components/FavoriteContainer.vue';
</script>
