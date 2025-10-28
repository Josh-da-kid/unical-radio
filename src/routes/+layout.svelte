<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/Footer.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import '../app.css';
	import 'carbon-components-svelte/css/all.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen overflow-x-hidden">
	<NavBar />

	<main class="flex-grow">
		{@render children?.()}
	</main>

	<footer><Footer /></footer>
</div>
