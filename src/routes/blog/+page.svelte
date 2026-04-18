<script lang="ts">
	import { resolve } from '$app/paths';

	import type { ContentItem } from 'skriplet';
	let { data }: { data: { posts: ContentItem[] } } = $props();
</script>

<main id="blog-page" class="w-full min-h-[72vh] flex flex-col gap-9 md:px-0">
	<h1 class="font-semibold text-xl">Blog</h1>

	<ul class="flex flex-col gap-2">
		{#each data.posts as post (post)}
			<li>
				<a
					href={resolve('/blog/[slug]', { slug: post.slug })}
					class="group w-full grid gap-2 md:gap-10 md:grid-cols-[minmax(120px,150px)_1fr] py-4 md:py-4 md:border-b border-border/40 transition-colors duration-20"
				>
					<span class="text-[0.85rem] text-foreground/50 order-2 md:order-1 md:self-start">
						{post.data.date}
					</span>

					<div class="flex flex-col gap-1 order-1 md:order-2">
						<p class="text-foreground font-medium">{post.data.title}</p>
						<p class="text-foreground/50">{post.data.description}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</main>
