<script lang="ts">
	import { resolve } from '$app/paths';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ArrowLeft02Icon } from '@hugeicons/core-free-icons';
	import type { ContentItem } from 'skriplet';

	type BlogPostData = {
		title: string;
		description: string;
		date: string;
		order: number;
		tags?: string[];
	};

	type BlogPostItem = Omit<ContentItem, 'data'> & { data: BlogPostData };

	let { data }: { data: { post: BlogPostItem } } = $props();
</script>

<main class="w-full min-h-[72vh] flex flex-col gap-6 md:px-0">
	<div class="w-full md:grid md:grid-cols-[150px_1fr] md:gap-10 md:items-start">
		<a
			href={resolve('/blog')}
			class="flex items-center gap-1 text-foreground/50 mb-4 md:mb-0 md:self-start"
			data-sveltekit-preload-code
		>
			<HugeiconsIcon icon={ArrowLeft02Icon} size={14} />
			back to blogs list
		</a>

		<article class="flex flex-col gap-2">
			<h1 class="text-3xl font-semibold md:flex md:items-center md:gap-4">
				<span class="hidden md:inline-block">{data.post.data.title}</span>
				<span class="md:hidden">{data.post.data.title}</span>
			</h1>

			<p class="font-mono text-foreground/50">{data.post.data.date}</p>
			<p class="text-foreground/60">{data.post.data.description}</p>

			{#if data.post.data.tags?.length}
				<div class="flex flex-wrap gap-2 text-sm text-foreground/60">
					{#each data.post.data.tags as tag (tag)}
						<span>#{tag}</span>
					{/each}
				</div>
			{/if}

			<div class="prose max-w-full text-foreground/50 mt-8">
				{data.post.content}
			</div>
		</article>
	</div>
</main>
