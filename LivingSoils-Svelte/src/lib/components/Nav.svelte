<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../styles/nav.css';

	let scrolled = false;
	let navReady = false;

	onMount(() => {
		// Apparition progressive au chargement
		setTimeout(() => {
			navReady = true;
		}, 100);

		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const menuItems = [
		{ label: 'Accueil', href: '/' },
		{ label: 'Fermes', href: '/fermes' },
		{ label: 'Actualités', href: '/actualites' },
		{ label: 'Partenaires', href: '/partenaires' }
	];

	$: currentPath = $page.url.pathname;
</script>

<nav class="main-nav" class:scrolled class:ready={navReady}>
	<div class="nav-container">
		<!-- Logo à gauche -->
		<a href="/" class="logo-link nav-item" style="--delay: 0">
			<img src="/ressources/logoLivingSoils.jpg" alt="Living Soils" class="logo" />
		</a>

		<!-- Menu centré -->
		<ul class="menu">
			{#each menuItems as item, i}
				<li class="nav-item" style="--delay: {i + 1}">
					<a href={item.href} class="menu-link" class:active={currentPath === item.href}>
						<span class="link-text">{item.label}</span>
						<span class="link-seed"></span>
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA à droite -->
		<div class="nav-item cta-wrapper" style="--delay: {menuItems.length + 1}">
			<a href="/soutenir" class="nav-cta">
				<span class="cta-overlay"></span>
				<span class="nav-cta-text">Rejoignez-nous</span>
			</a>
		</div>
	</div>
</nav>
