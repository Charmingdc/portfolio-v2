<script lang="ts">
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { theme } from '$lib/theme.svelte';
	import { romanize } from '@charmingdc/romanify';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { NewTwitterIcon, Mail01Icon, GithubIcon, SmileIcon } from '@hugeicons/core-free-icons';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import favicon from '$lib/assets/favicon.svg';
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
		{ label: 'Projects', path: '/projects' },
		{ label: 'Blog', path: '/blog' }
	]);

	const displayTitle = $derived(() => {
		const segment = page.url.pathname.split('/').filter(Boolean).pop();

		if (!segment) return 'Home';
		return segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
	});

	let socials = $state([
		{ icon: NewTwitterIcon, link: 'https://x.com/Charmingdc01', platform: 'X (formerly twitter)' },
		{ icon: Mail01Icon, link: 'mailto:charmingdc002@gmail.com', platform: 'Gmail' },
		{ icon: GithubIcon, link: 'https://github.com/Charmingdc', platform: 'Github' },
		{ icon: SmileIcon, link: 'https://myhappr.xyz/muis', platform: 'Myhappr' }
	]);

	const variants = {
		visible: { opacity: 1, filter: 'blur(0px)' },
		hidden: { opacity: 0, filter: 'blur(8px)' }
	};
</script>

<svelte:head>
	<title>Adebayo Muis | {displayTitle()}</title>
	<link rel="icon" href={favicon} />

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
				<nav>
					<div class="w-full flex items-center justify-between mb-14">
						<ul class="flex items-center gap-3">
							{#each navLinks as { label, path }}
								<li>
									<a
										href={path}
										class="text-foreground {path === page.url.pathname
											? 'font-semibold'
											: 'text-foreground/50'}"
										data-sveltekit-preload-code
									>
										{label}
									</a>
								</li>
							{/each}
						</ul>

						<ul class="flex items-center gap-3">
							{#each socials as { icon, link, platform }}
								<li>
									<a
										href={link}
										title={`Go to ${platform}`}
										target="_blank"
										class="text-foreground/50 transition-colors hover:text-foreground"
									>
										<HugeiconsIcon {icon} size={14} strokeWidth={2} />
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</nav>

				<main>
					{@render children()}
				</main>

				<footer
					class="w-full flex md:hidden items-center justify-center lowercase text-foreground/50 bg-background py-5 mt-16 -mb-5"
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
