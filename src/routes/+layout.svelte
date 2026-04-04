<script lang="ts">
  import { page } from "$app/state";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { NewTwitterIcon, Mail01Icon, GithubIcon, SmileIcon } from "@hugeicons/core-free-icons";
  
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
	
	let navLinks = $state([
	 { label: "Home",  path: "/" },
   { label: "Projects", path: "/projects" },
	 { label: "Blog", path: "/blog" }
	]);
	
	let socials = $state([
	 { icon: NewTwitterIcon, link: "https://x.com/Charmingdc01", platform: "X (formerly twitter)" }, 
	 { icon: Mail01Icon, link: "mailto:charmingdc002@gmail.com", platform: "Gmail" },
	 { icon: GithubIcon, link: "https://github.com/Charmingdc", platform: "Github" },
	 { icon: SmileIcon, link: "https://myhappr.xyz/muis", platform: "Myhappr" }
	]);
</script>

<svelte:head>
  <title> Adebayo Muis </title>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
  <div class="w-full flex items-center justify-between"> 
   <ul class="w-full flex items-center gap-3">
    {#each navLinks as { label, path}} 
     <li>
      <a href="{path}" class="{path === page.url.pathname ? "font-semi-bold text-foreground" : "text-foreground/50"}" data-sveltekit-preload-code> { label } </a>
      </li>
    {/each}
  </ul>
  
  <ul>
    {#each socials as { icon, link, platform }}
     <li> 
       <a href="{link}" title="Go to {platform}" target="_blank">
        <HugeiconsIcon icon={icon} />
       </a>
      </li>
    {/each}
  </ul>
 </div>
</nav>

{@render children()}
