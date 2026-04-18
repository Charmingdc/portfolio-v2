<script lang="ts">
	import { error } from '@sveltejs/kit';

	const { data } = $props();

	const project = data.project;

	if (!project) {
		throw error(404, 'Project not found');
	}
</script>

<main id={project.name} class="w-full min-h-[70vh] flex flex-col items-center justify-center gap-4">
	<h1 class="font-bold text-2xl">{project.name}</h1>
	<p>Detailed project's page - in progress.</p>
</main>
