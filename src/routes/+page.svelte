<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		LinkSquare01Icon,
		CodeIcon,
		GithubIcon,
		NewTwitterIcon,
		File01Icon
	} from '@hugeicons/core-free-icons';

	import { SITE_DATA } from '$lib/data/site-data';
	import { onMount } from 'svelte';

	let nowPlaying = $state({
		isPlaying: false,
		title: 'Not playing',
		artist: 'Spotify',
		albumImageUrl: '',
		songUrl: ''
	});

	// Stays false until the first successful fetch, so the label reads "Music" on load.
	let loaded = $state(false);

	onMount(async () => {
		try {
			const res = await fetch('/api/now-playing');
			if (res.ok) {
				nowPlaying = await res.json();
				loaded = true;
			}
		} catch (e) {
			console.error(e);
		}
	});
</script>

<main id="about-page" class="w-full flex flex-col gap-8 md:gap-14 pb-10">
	<!-- Hero Section -->
	<header
		class="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-6 md:gap-0 mt-6 md:mt-0"
	>
		<div class="flex flex-col gap-4 w-full md:max-w-xl mb-6">
			<h1 class="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
				Hey, I'm {SITE_DATA.name.replace('.', '')} — an engineer
			</h1>
			<p class="text-xl md:text-2xl text-muted font-medium max-w-md">{SITE_DATA.intro}</p>
			<div class="flex flex-wrap items-center gap-3 mt-2 mb-2">
				<a
					href="/resume.pdf"
					download="Adebayo_Muis_Resume.pdf"
					class="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border/30
					hover:bg-border/10 text-sm font-bold transition-colors"
				>
					<HugeiconsIcon icon={File01Icon} size={16} /> Resume
				</a>
				<a
					href="https://github.com/{SITE_DATA.githubUsername}"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border/30 hover:bg-border/10 text-sm font-bold transition-colors"
				>
					<HugeiconsIcon icon={GithubIcon} size={16} /> GitHub
				</a>
				<a
					href="https://x.com/{SITE_DATA.xUsername}"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border/30 hover:bg-border/10 text-sm font-bold transition-colors"
				>
					<HugeiconsIcon icon={NewTwitterIcon} size={16} /> Twitter
				</a>
			</div>
		</div>
		<!-- Circular PFP - hidden on mobile, visible on md+ -->
		<div
			class="hidden md:flex w-[6rem] h-[6rem] md:w-[8.5rem] md:h-[8.5rem] rounded-full overflow-hidden bg-border/20 items-center justify-center shrink-0 border border-border/30 -mt-10"
		>
			<!-- Image placeholder API -->
			<img
				src="https://glint-dev.vercel.app/api/avatar?seed=charmingdc&size=500"
				alt="Profile"
				class="w-full h-full object-cover"
			/>
		</div>
	</header>

	<!-- Content Grid (2 columns on md to lg) -->
	<div class="w-full flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-6">
		<!-- Left Column: Building, Tech stack -->
		<div class="flex flex-col gap-6 max-md:contents">
			<!-- Building -->
			<div
				class="order-1 md:order-none border-2 border-border/30 rounded-2xl px-2.5 py-3 md:p-5 relative flex flex-col justify-center"
			>
				<div
					class="absolute -top-[13px] left-5 py-[0.15rem] px-3 text-sm font-bold bg-background rounded-full border-2 border-border/30 text-foreground"
				>
					Building
				</div>
				<div class="flex items-center gap-4 mt-2">
					<img
						src="/images/myhappr-logo.png"
						alt="{SITE_DATA.currentProject.name} logo"
						class="w-12 h-12 border border-border/10 rounded-md object-cover"
					/>
					<div class="flex flex-col">
						<span class="font-bold text-[0.95rem]">{SITE_DATA.currentProject.name}</span>
						<a
							href={SITE_DATA.currentProject.link}
							target="_blank"
							class="text-xs text-muted hover:text-foreground transition-colors underline decoration-border/50"
							>View Project</a
						>
					</div>
				</div>
			</div>

			<!-- Tech Stacks -->
			<div
				class="order-3 md:order-none border-2 border-border/30 rounded-2xl px-2.5 py-3 md:p-5 relative h-[400px] md:h-[300px] lg:h-[350px] flex flex-col"
			>
				<div
					class="absolute -top-[13px] left-5 py-[0.15rem] px-3 text-sm font-bold bg-background rounded-full border-2 border-border/30 text-foreground"
				>
					Tech stacks
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<div
					class="flex-1 overflow-y-auto mt-2 scrollbar-hide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border/50 rounded-md"
					tabindex="0"
					role="region"
					aria-label="Tech stacks list"
				>
					<div class="flex flex-col ml-3 mt-1 border-l border-border/30 pb-2">
						{#each SITE_DATA.tools as tool (tool.name)}
							<div class="relative pl-8 py-3">
								<div
									class="absolute -left-[13px] top-[14px] w-8 h-8 rounded-md bg-background border border-border/30 flex items-center justify-center text-muted"
								>
									<HugeiconsIcon icon={CodeIcon} size={12} />
								</div>
								<div class="flex flex-col -mt-0.5">
									<span class="text-sm font-medium text-foreground/80">{tool.name}</span>
									<span class="text-xs text-muted">{tool.description}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Right Column: Music, Projects -->
		<div class="flex flex-col gap-6 max-md:contents">
			<!-- Music -->
			<div
				class="order-2 md:order-none border-2 border-border/30 rounded-2xl px-2.5 py-3 md:p-5 relative flex flex-col justify-center"
			>
				<div
					class="absolute -top-[13px] left-5 py-[0.15rem] px-3 text-sm font-bold bg-background rounded-full border-2 border-border/30 text-foreground"
				>
					{loaded && !nowPlaying.isPlaying ? 'Last played' : 'Playing'}
				</div>
				<div class="flex items-center gap-4 mt-2">
					{#if nowPlaying.albumImageUrl}
						<img
							src={nowPlaying.albumImageUrl}
							alt="Album cover"
							class="w-12 h-12 rounded-md object-cover"
						/>
					{:else}
						<div
							class="w-12 h-12 rounded-md bg-border/20 flex items-center justify-center animate-pulse"
						></div>
					{/if}

					<div class="flex flex-col">
						<span class="font-bold text-[0.95rem] line-clamp-1">{nowPlaying.title}</span>
						<span class="text-xs text-muted line-clamp-1">{nowPlaying.artist}</span>
					</div>
				</div>
			</div>

			<!-- Projects -->
			<div
				class="order-4 md:order-none border-2 border-border/30 rounded-2xl px-2.5 py-3 md:p-5 relative h-[400px] md:h-[300px] lg:h-[350px] flex flex-col"
			>
				<div
					class="absolute -top-[13px] left-5 py-[0.15rem] px-3 text-sm font-bold bg-background rounded-full border-2 border-border/30 text-foreground"
				>
					Projects
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<div
					class="flex-1 overflow-y-auto mt-2 scrollbar-hide flex flex-col gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border/50 rounded-md"
					tabindex="0"
					role="region"
					aria-label="Projects list"
				>
					{#each SITE_DATA.projects as project (project.name)}
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-4 px-2 py-3 hover:bg-border/10 rounded-lg transition-colors group"
						>
							<div
								class="w-10 h-10 rounded-md bg-border/20 flex items-center justify-center text-muted shrink-0"
							>
								<HugeiconsIcon icon={LinkSquare01Icon} size={20} />
							</div>
							<div class="flex flex-col">
								<span
									class="font-bold text-[0.95rem] group-hover:text-foreground/90 transition-colors line-clamp-1"
									>{project.name}</span
								>
								<span class="text-xs text-muted line-clamp-1">{project.description}</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
