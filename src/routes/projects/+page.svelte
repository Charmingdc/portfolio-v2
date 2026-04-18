<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_DATA } from '$lib/data/site-data';
</script>

<main id="projects-page" class="w-full min-h-[70vh] flex flex-col gap-9">
	<h1 class="font-semibold text-xl">Projects</h1>

	<div class="w-full flex flex-col gap-3">
		{#each SITE_DATA.projects as { name, slug, description, githubRepo, liveUrl } (slug)}
			<article
				class="group w-full grid gap-3 md:gap-10 md:grid-cols-[minmax(180px,260px)_1fr] py-5 md:py-4 md:border-b border-border/40 transition-colors duration-200 md:hover:bg-foreground/5"
				aria-labelledby={`project-${name}`}
			>
				<h2 id={`project-${name}`}>
					<a
						href={resolve(liveUrl)}
						target="_blank"
						rel="noopener noreferrer"
						class="outline-none focus-visible:ring-1 focus-visible:ring-foreground/40 rounded-sm"
					>
						{name}
					</a>
				</h2>

				<div class="flex flex-col gap-2">
					<p class="text-foreground/70">{description}</p>

					,
					<div class="flex items-center gap-5">
						<a
							href={resolve('/projects/[slug]', { slug })}
							class="flex items-center gap-1 text-foreground/60 underline underline-offset-4 transition-colors group-hover:text-foreground focus-visible:ring-1 focus-visible:ring-foreground/40 rounded-sm w-fit"
						>
							See overview
						</a>

						<a
							href={`https://github.com/${SITE_DATA.githubUsername}/${githubRepo}`}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-1 text-foreground/60 underline underline-offset-4 transition-colors group-hover:text-foreground focus-visible:ring-1 focus-visible:ring-foreground/40 rounded-sm w-fit"
						>
							View source code
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</main>
