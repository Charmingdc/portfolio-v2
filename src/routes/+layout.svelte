<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { theme } from '$lib/theme.svelte';
	import { romanize } from '@charmingdc/romanify';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const saved = localStorage.getItem('$theme');
		if (saved) {
			theme.value = saved;
		} else {
			const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
			theme.value = prefersLight ? 'light' : 'dark';
		}
	});

	$effect(() => {
		const root = document.documentElement;
		if (theme.value === 'light') {
			root.classList.add('light');
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
			root.classList.remove('light');
		}
		localStorage.setItem('$theme', theme.value);
	});
	const displayTitle = $derived(() => {
		const segment = page.url.pathname.split('/').filter(Boolean).pop();

		if (!segment) return 'Frontend Engineer';
		return segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
	});
</script>

<svelte:head>
	<title>Muis | {displayTitle()}</title>
	<link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />

	<meta name="theme-color" content={theme.value === 'light' ? '#fefefe' : '#0c0c0c'} />
</svelte:head>

<div class="transition-colors duration-200">
	<main class="w-full flex justify-center md:mt-24">
		<div class="w-full flex flex-col items-center max-w-4xl md:px-8">
			{@render children()}
		</div>
	</main>

	<footer
		class="w-full flex items-center justify-center lowercase text-foreground/65 bg-background py-5 mt-8 -mb-5"
	>
		© {romanize(new Date().getFullYear())} adebayo muis.
	</footer>
</div>

<div class="fixed bottom-4 right-6 z-50">
	<ThemeToggle />
</div>
