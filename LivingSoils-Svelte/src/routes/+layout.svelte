<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/">Réseau Global</a>
	<a href="/fermes">Nos Fermes</a>
	<a href="/partenaires">Partenaires</a>
	<a href="/soutenir">Nous Soutenir</a>
	<a href="/actualites">Actualités</a>
</nav>

<main>
	{@render children()}
</main>

<style>
    nav {
        display: flex;
        gap: 2rem;
        padding: 1rem 2rem;
        background: #f5f5f5;
        border-bottom: 1px solid #ddd;
    }

    nav a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
    }

    nav a:hover {
        color: #2563eb;
    }

    main {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
