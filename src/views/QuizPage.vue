<template>
	<ion-menu content-id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-title>Quiz menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="m-6 text-2xl flex flex-wrap flex-col">
				<a class="text-black" href="/tabs/home"
					><ion-icon class="pr-4" aria-hidden="true" :icon="home"></ion-icon>
					<ion-label class="text-2xl">Home</ion-label>
				</a>
				<a class="text-black" href="/tabs/favorite"
					><ion-icon class="pr-4" aria-hidden="true" :icon="heart"></ion-icon>
					<ion-label class="text-2xl">Favorite</ion-label>
				</a>
				<a class="text-black" href="/tabs/setting"
					><ion-icon class="pr-4" aria-hidden="true" :icon="cog"></ion-icon>
					<ion-label class="text-2xl">Settings</ion-label></a
				>
			</div>
		</ion-content>
	</ion-menu>
	<ion-page id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-buttons>
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title>Question</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true"></ion-content>
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
	import { home, heart, cog } from 'ionicons/icons';
</script>
