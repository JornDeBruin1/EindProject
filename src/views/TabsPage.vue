<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar>
				<ion-tab-button tab="Home" href="/tabs/home">
					<!-- <ion-icon aria-hidden="true" :icon="triangle" /> -->
					<ion-label class="text-[32px]">Home</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab2" href="/tabs/tab2">
					<ion-icon aria-hidden="true" :icon="ellipse" />
					<ion-label>Tab 2</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="tab3" href="/tabs/tab3">
					<ion-icon aria-hidden="true" :icon="square" />
					<ion-label>Tab 3</ion-label>
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
	import { ellipse, square, triangle } from 'ionicons/icons';
</script>
