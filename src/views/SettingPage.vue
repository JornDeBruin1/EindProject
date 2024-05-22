<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Settings</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<SettingContainer name="Settings page" />
		</ion-content>
	</ion-page>
</template>

<script setup>
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
	// import SettingContainer from '@/components/SettingContainer.vue';
</script>
