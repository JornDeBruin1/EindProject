<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title class="">Settings</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true"><SettingsContainer /></ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonPage,
		IonHeader,
		IonToolbar,
		IonButtons,
		IonMenuButton,
		IonTitle,
		IonContent,
	} from '@ionic/vue';
	import SettingsContainer from '../components/SettingsContainer.vue';
</script>
