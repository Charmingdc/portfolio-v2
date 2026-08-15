<script lang="ts">
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { theme } from '$lib/theme.svelte';
	import { romanize } from '@charmingdc/romanify';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { NewTwitterIcon, Mail01Icon, GithubIcon, SmileIcon } from '@hugeicons/core-free-icons';
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

	let navLinks = $state([
		{ label: 'Home', path: '/' },
		{ label: 'Blog', path: '/blog' }
	]);

	const displayTitle = $derived(() => {
		const segment = page.url.pathname.split('/').filter(Boolean).pop();

		if (!segment) return 'Frontend Engineer';
		return segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
	});

	type Social = {
		icon: typeof NewTwitterIcon;
		link: string;
		platform: string;
	};

	const variants = {
		visible: { opacity: 1, filter: 'blur(0px)' },
		hidden: { opacity: 0, filter: 'blur(8px)' }
	};
</script>

<svelte:head>
	<title>Muis | {displayTitle()}</title>
	<link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />

	<meta name="theme-color" content={theme.value === 'light' ? '#fefefe' : '#0c0c0c'} />
</svelte:head>

<AnimatePresence show={true}>
	{#key page.url.pathname}
		<Motion
			initial="hidden"
			animate="visible"
			exit="hidden"
			{variants}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			let:motion
		>
			<div class="transition-colors duration-200" use:motion>
				<nav class="w-full flex flex-col items-center">
					<div
						class="w-full max-w-2xl flex items-center justify-start mt-5 md:mt-12 mb-10 md:mb-14"
					>
						<ul class="flex items-center gap-3">
							{#each navLinks as { label, path } (path)}
								<li>
									<a
										href={resolve(path)}
										class="relative text-foreground transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-foreground after:transition-all after:duration-300 {path === page.url.pathname
											? 'font-semibold after:w-full'
											: 'text-foreground/65 hover:text-foreground after:w-0 hover:after:w-full'}"
										data-sveltekit-preload-code
									>
										{label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</nav>

				<main class="w-full flex justify-center">
					<div class="w-full flex flex-col items-center max-w-2xl">
						{@render children()}
					</div>
				</main>

				<footer
					class="w-full flex items-center justify-center lowercase text-foreground/65 bg-background py-5 mt-16 -mb-5"
				>
					© {romanize(new Date().getFullYear())} adebayo muis.
				</footer>
			</div>
		</Motion>
	{/key}
</AnimatePresence>

<div class="fixed bottom-4 right-6 z-50">
	<ThemeToggle />
</div>
