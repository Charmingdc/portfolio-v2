<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
	import { SITE_DATA } from '$lib/data/site-data';
</script>

<main id="projects-page" class="w-full min-h-[70vh] flex flex-col gap-9">
	<h1 class="font-semibold text-xl">Projects</h1>

	<div class="w-full flex flex-col gap-9">
		{#each SITE_DATA.projects as { name, description, githubRepo, liveUrl }}
			<div class="w-full flex flex-col gap-2">
				<a href={liveUrl} target="_blank">
					<h2>{name}</h2>
				</a>

				<p>{description}</p>

				<a
					href="https://github/{SITE_DATA.githubUsername}/{githubRepo}"
					target="_blank"
					class="flex items-center gap-1 text-foreground/70"
				>
					View source code
					<HugeiconsIcon icon={ArrowRight02Icon} size={14} />
				</a>
			</div>
		{/each}
	</div>
</main>
