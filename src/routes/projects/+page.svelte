<script lang="ts">
	// import { resolve } from '$app/paths';
	import { SITE_DATA } from '$lib/data/site-data';
</script>

<main id="projects-page" class="w-full min-h-[70vh] flex flex-col gap-9">
	<h1 class="font-semibold text-xl">Projects</h1>

	<div class="w-full flex flex-col gap-3">
		{#each SITE_DATA.projects as { name, slug, description, liveUrl } (slug)}
			<a
				href={String(liveUrl)}
				target="_blank"
				rel="noopener noreferrer"
				class="outline-none focus-visible:ring-1 focus-visible:ring-foreground/40 rounded-sm"
			>
				<article
					class="group w-full grid gap-3 md:gap-10 md:grid-cols-[minmax(180px,260px)_1fr] py-5 md:py-4 border-b border-border/40 transition-all duration-200 hover:border-l-4 hover:pl-2 hover:pt-2 md:hover:bg-foreground/5"
					aria-labelledby={`project-${name}`}
				>
					<h2 id={`project-${name}`}>
						{name}
					</h2>

					<h3 class="font-mono font-light text-xs lowercase -mt-1">{new URL(liveUrl).origin}</h3>

					<div class="flex flex-col gap-2">
						<p class="text-foreground/70">{description}</p>
					</div>
				</article>
			</a>
		{/each}
	</div>
</main>
