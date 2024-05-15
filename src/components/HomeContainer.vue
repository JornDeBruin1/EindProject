<template>
	<div class="w-full bg-red-500">
		<ion-card>
			<img
				alt="Silhouette of mountains"
				src="https://ionicframework.com/docs/img/demos/card-media.png"
			/>
			<ion-card-header>
				<ion-card-title>Sport</ion-card-title>
				<ion-card-subtitle>Sport Subtitle</ion-card-subtitle>
			</ion-card-header>

			<ion-card-content>
				Here's a small text description for the sport content. Nothing more, nothing less.
			</ion-card-content>
		</ion-card>
		<ion-card>
			<img
				alt="Silhouette of mountains"
				src="https://ionicframework.com/docs/img/demos/card-media.png"
			/>
			<ion-card-header>
				<ion-card-title>Algemene kennis</ion-card-title>
				<ion-card-subtitle>Algemene kennis Subtitle</ion-card-subtitle>
			</ion-card-header>

			<ion-card-content>
				Here's a small text description for the algemene kennis content. Nothing more,
				nothing less.
			</ion-card-content>
		</ion-card>
	</div>
</template>

<script setup>
	defineProps({
		name: String,
	});
</script>

<style scoped>
	#container {
		text-align: center;
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	#container strong {
		font-size: 20px;
		line-height: 26px;
	}

	#container p {
		font-size: 16px;
		line-height: 22px;
		color: #8c8c8c;
		margin: 0;
	}

	#container a {
		text-decoration: none;
	}
</style>
