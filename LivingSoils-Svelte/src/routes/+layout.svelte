<script lang="ts">
	import '../lib/styles/global.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	afterNavigate(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="description"
		content="LivingSoils connecte agriculteurs, scientifiques et citoyens pour régénérer les sols. Découvrez nos fermes engagées, nos partenaires et rejoignez le mouvement pour une agriculture durable."
	/>
	<meta
		name="keywords"
		content="régénération des sols, agriculture durable, agriculture régénérative, fermes écologiques, sols vivants, agroécologie, permaculture, réseau agricole"
	/>
	<meta name="author" content="LivingSoils" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="LivingSoils - Réseau Global de Régénération des Sols" />
	<meta
		property="og:description"
		content="Connectons agriculteurs, scientifiques et citoyens pour régénérer les sols et promouvoir une agriculture durable."
	/>
	<meta property="og:site_name" content="LivingSoils" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LivingSoils - Réseau Global de Régénération des Sols" />
	<meta
		name="twitter:description"
		content="Connectons agriculteurs, scientifiques et citoyens pour régénérer les sols et promouvoir une agriculture durable."
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

