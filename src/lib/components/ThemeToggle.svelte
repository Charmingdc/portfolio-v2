<script>
	import { theme } from '$lib/theme.svelte';

	function toggle() {
		theme.value = theme.value === 'dark' ? 'light' : 'dark';
	}
</script>

<button
	aria-label="Toggle Theme"
	onclick={toggle}
	class={`w-4 h-4 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-125 active:scale-95 ${theme.value === 'dark' ? 'bg-blue-400' : 'bg-foreground/80 hover:bg-foreground shadow-sm'}`}
></button>
