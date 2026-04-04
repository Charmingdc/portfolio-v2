<script lang="ts">
	import { SITE_DATA } from '$lib/data/site-data';
</script>

<main id="#about-page" class="w-full flex flex-col gap-3 [&_h2]:mt-7 md:[&_h2]:mt-0">
	<h1 class="text-3xl">{SITE_DATA.name}</h1>

	<p>{SITE_DATA.intro}</p>

	<article class="w-full flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-10">
		<h2>About</h2>

		<div class="w-full flex flex-col gap-3"> 
		 {#each SITE_DATA.about as aboutParagraph}
			<p>{aboutParagraph}</p>
	  	{/each}
	  </div>
	</article>

	<article class="w-full flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-10">
		<h2>Tools</h2>

		<div class="w-full flex flex-wrap gap-2 text-foreground/50">
			{#each SITE_DATA.tools as tool}
				<span>{tool}</span>
			{/each}
		</div>
	</article>

	<article class="w-full flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-10">
		<h2>Interests</h2>
 
		<div class="w-full flex flex-col gap-3"> 
	  	{#each SITE_DATA.interest as interestParagraph}
		  	<p>{interestParagraph}</p>
	  	{/each}
	  </div>
	</article>
</main>
