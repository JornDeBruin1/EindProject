<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-list>
				<ion-item class="mt-12">
					<ion-label class="dark:bg-black dark:text-white">Enable darkmode</ion-label>
					<ion-toggle
						v-model="isDarkModeEnabled.value"
						color="primary"
						@ionChange="toggleDarkMode"
					></ion-toggle>
				</ion-item>
				<ion-item>
					<ion-label>Language</ion-label>
					<ion-select v-model="selectedLanguage.value" placeholder="Select One">
						<ion-select-option value="en">English</ion-select-option>
						<ion-select-option value="es">Spanish</ion-select-option>
						<!-- Add more languages as needed -->
					</ion-select>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonPage,
		IonContent,
		IonList,
		IonItem,
		IonLabel,
		IonToggle,
		IonSelect,
		IonSelectOption,
	} from '@ionic/vue';
	import { inject, ref, watchEffect } from 'vue';
	const selectedLanguage = ref('');

	const isDarkModeEnabled = inject('isDarkModeEnabled');
	const toggleDarkMode = () => {
		isDarkModeEnabled.value = !isDarkModeEnabled.value;
	};
</script>
