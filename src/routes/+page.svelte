<script lang="ts">
	import { SITE_DATA } from '$lib/data/site-data';
</script>

<main id="about-page" class="w-full flex flex-col gap-6 md:gap-10 [&_h2]:mt-6 md:[&_h2]:mt-0">
	<h1 class="text-3xl">{SITE_DATA.name}</h1>

	<p>{SITE_DATA.intro}</p>

	<!-- About -->
	<article
		class="w-full grid gap-3 md:gap-10 md:grid-cols-[minmax(150px,200px)_1fr]"
		aria-labelledby="about-heading"
	>
		<h2 id="about-heading">About</h2>

		<div class="flex flex-col gap-3">
			{#each SITE_DATA.about as aboutParagraph}
				<p>{aboutParagraph}</p>
			{/each}
		</div>
	</article>

	<!-- Tools -->
	<article
		class="w-full grid gap-3 md:gap-10 md:grid-cols-[minmax(150px,200px)_1fr]"
		aria-labelledby="tools-heading"
	>
		<h2 id="tools-heading">Tools</h2>

		<div class="flex flex-wrap gap-2 text-foreground/50">
			{#each SITE_DATA.tools as tool}
				<span>{tool}</span>
			{/each}
		</div>
	</article>

	<!-- Interests -->
	<article
		class="w-full grid gap-3 md:gap-10 md:grid-cols-[minmax(150px,200px)_1fr]"
		aria-labelledby="interests-heading"
	>
		<h2 id="interests-heading">Interests</h2>

		<div class="flex flex-col gap-3">
			{#each SITE_DATA.interest as interestParagraph}
				<p>{interestParagraph}</p>
			{/each}
		</div>
	</article>
</main>
