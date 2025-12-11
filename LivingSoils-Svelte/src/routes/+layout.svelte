<script lang="ts">
	import '../lib/styles/global.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="description"
		content="LivingSoils - Réseau global pour la régénération des sols et l'agriculture durable"
	/>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<title>LivingSoils - Réseau Global de Régénération des Sols</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Nav />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
