<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import {
		NewTwitterIcon,
		Mail01Icon,
		GithubIcon,
		LinkSquare01Icon
	} from '@hugeicons/core-free-icons';

	import { SITE_DATA } from '$lib/data/site-data';

	type Social = {
		icon: typeof NewTwitterIcon;
		link: string;
		platform: string;
	};

	let socials = $state<Social[]>([
		{
			icon: NewTwitterIcon,
			link: 'https://x.com/Charmingdc01',
			platform: 'X (formerly twitter)'
		},
		{
			icon: Mail01Icon,
			link: 'mailto:charmingdc002@gmail.com',
			platform: 'Gmail'
		},
		{
			icon: GithubIcon,
			link: 'https://github.com/Charmingdc',
			platform: 'Github'
		}
	]);
</script>

<main id="about-page" class="w-full flex flex-col gap-8 md:gap-10 [&_h2]:mt-6 md:[&_h2]:mt-0">
	<h1 class="text-3xl md:text-4xl">{SITE_DATA.name}</h1>
	<p class="-mt-4 md:-mt-6">{SITE_DATA.intro}</p>

	<p class="w-full flex items-center gap-1 -mt-4 md:-mt-6">
		Currently working on <a
			href={SITE_DATA.currentProject.link}
			target="_blank"
			class="font-bold text-foreground/75 underline underline-offset-4 decoration-border decoration-2 hover:text-foreground hover:decoration-foreground transition-all duration-300"
			>{SITE_DATA.currentProject.name}</a
		>.
	</p>

	<!-- Socials -->
	<article
		class="w-full flex items-center justify-start gap-5 md:-mt-2"
		aria-labelledby="socials-heading"
	>
		<a
			href="/resume.pdf"
			download="Adebayo-Muis-Resume.pdf"
			class="w-fit bg-border/10 py-2 px-5 border border-border/30 rounded hover:bg-border/30 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-95 transition-all duration-300"
		>
			Resume
		</a>

		<ul class="flex items-center gap-4">
			{#each socials as { icon, link, platform } (link)}
				<li>
					<a
						href={link}
						title={`Go to ${platform}`}
						target="_blank"
						class="inline-block text-foreground/65 hover:text-foreground hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300"
					>
						<HugeiconsIcon {icon} size={18} strokeWidth={2} />
					</a>
				</li>
			{/each}
		</ul>
	</article>

	<!-- Tech stacks -->
	<article class="w-full flex flex-col gap-2" aria-labelledby="tech-stacks">
		<h2 id="tools-heading">Tech stacks</h2>

		<div class="flex flex-wrap gap-2 text-foreground/65">
			{#each SITE_DATA.tools as tool (tool)}
				<span
					class="w-fit py-1 px-2 border border-border/50 rounded hover:bg-border/20 hover:border-foreground/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
					>{tool}</span
				>
			{/each}
		</div>
	</article>

	<!-- Projects -->
	<article class="w-full flex flex-col gap-2" aria-labelledby="tech-stacks">
		<h2 id="tools-heading">Projects</h2>

		<div class="flex flex-wrap gap-11 text-foreground/65">
			{#each SITE_DATA.projects as { name, slug, description, liveUrl } (slug)}
				<div class="w-full md:max-w-[19rem] flex flex-col items-center gap-3">
					<a
						href={String(liveUrl)}
						target="_blank"
						rel="noopener noreferrer"
						class="group w-full flex items-center justify-between"
					>
						<strong
							class="text-[1.08rem] group-hover:text-foreground transition-colors duration-300"
							>{name}</strong
						>

						<span
							class="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-foreground/65 group-hover:text-foreground"
						>
							<HugeiconsIcon icon={LinkSquare01Icon} size={16} />
						</span>
					</a>

					<p>{description}</p>
				</div>
			{/each}
		</div>
	</article>
</main>
