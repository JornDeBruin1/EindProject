<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar>
				<ion-tab-button tab="Home" href="/tabs/home">
					<ion-icon aria-hidden="true" :icon="home" />
					<ion-label class="text-2xl">Home</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="favorite" href="/tabs/favorite">
					<ion-icon aria-hidden="true" :icon="heart"></ion-icon>
					<ion-label class="text-2xl">favorite</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="setting" href="/tabs/setting">
					<ion-icon aria-hidden="true" :icon="cog"></ion-icon>
					<ion-label class="text-2xl">Settings</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup>
	import {
		IonTabBar,
		IonTabButton,
		IonTabs,
		IonLabel,
		IonIcon,
		IonPage,
		IonRouterOutlet,
	} from '@ionic/vue';
	import { home, heart, cog } from 'ionicons/icons';
</script>
