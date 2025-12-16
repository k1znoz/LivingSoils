<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../styles/nav.css';

	let scrolled = false;
	let navReady = false;
	let mobileMenuOpen = false;

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

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="main-nav" class:scrolled class:ready={navReady} class:menu-open={mobileMenuOpen}>
	<div class="nav-container">
		<!-- Logo à gauche -->
		<a href="/" class="logo-link nav-item" style="--delay: 0">
			<img src="/ressources/logoLivingSoils.jpg" alt="Living Soils" class="logo" />
		</a>

		<!-- Menu centré - Desktop -->
		<ul class="menu desktop-menu">
			{#each menuItems as item, i}
				<li class="nav-item" style="--delay: {i + 1}">
					<a href={item.href} class="menu-link" class:active={currentPath === item.href}>
						<span class="link-text">{item.label}</span>
						<span class="link-seed"></span>
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA à droite - Desktop -->
		<div class="nav-item cta-wrapper desktop-cta" style="--delay: {menuItems.length + 1}">
			<a href="/soutenir" class="nav-cta">
				<span class="cta-overlay"></span>
				<span class="nav-cta-text">Rejoignez-nous</span>
			</a>
		</div>

		<!-- Bouton Hamburger - Mobile -->
		<button
			class="hamburger nav-item"
			class:open={mobileMenuOpen}
			on:click={toggleMobileMenu}
			aria-label="Menu"
			style="--delay: {menuItems.length + 1}"
		>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		</button>
	</div>

	<!-- Menu Mobile -->
	<div class="mobile-menu" class:open={mobileMenuOpen}>
		<ul class="mobile-menu-list">
			{#each menuItems as item, i}
				<li class="mobile-menu-item" style="--delay: {i}">
					<a
						href={item.href}
						class="mobile-menu-link"
						class:active={currentPath === item.href}
						on:click={closeMobileMenu}
					>
						<span class="link-text">{item.label}</span>
						<span class="link-seed"></span>
					</a>
				</li>
			{/each}
			<li class="mobile-menu-item mobile-cta-item" style="--delay: {menuItems.length}">
				<a href="/soutenir" class="nav-cta mobile-cta" on:click={closeMobileMenu}>
					<span class="cta-overlay"></span>
					<span class="nav-cta-text">Rejoignez-nous</span>
				</a>
			</li>
		</ul>
	</div>
</nav>
