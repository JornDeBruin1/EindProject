import { ref, watchEffect } from 'vue';

export default function useDarkMode() {
	const isDarkModeEnabled = ref(false);

	watchEffect(() => {
		document.documentElement.classList[isDarkModeEnabled.value ? 'add' : 'remove'](
			'dark'
		);
	});

	const toggleDarkMode = () => {
		isDarkModeEnabled.value = !isDarkModeEnabled.value;
	};

	return {
		isDarkModeEnabled,
		toggleDarkMode,
	};
}
