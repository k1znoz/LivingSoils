<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import '../styles/nav.css';

	const maxOpacity = 0.8;
	let navEl: HTMLElementTagNameMap['nav'] | null = null;

	function updateNav() {
		if (!browser) return;

		const scrollY = window.scrollY || 0;
		const threshold = Math.max(window.innerHeight * 0.75, 1);
		const ratio = Math.min(scrollY / threshold, 1);
		const opacity = Math.min(ratio * maxOpacity, maxOpacity);

		document.documentElement.style.setProperty('--nav-opacity', opacity.toString());

		if (navEl) {
			navEl.classList.toggle('nav-scrolling', scrollY > 0);
			navEl.classList.toggle('nav-transparent', scrollY === 0);
			navEl.classList.toggle('nav-compact', scrollY > threshold * 0.25);
		}
	}

	function onScroll() {
		updateNav();
	}
	function onResize() {
		updateNav();
	}

	onMount(() => {
		if (!browser) return;
		updateNav();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize);
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('scroll', onScroll);
		window.removeEventListener('resize', onResize);
	});
</script>

<nav bind:this={navEl} class="nav nav-transparent">
	<div class="container page-gutter-lg">
		<div class="flex items-center nav-container">
			<!-- Logo -->
			<a href="/" class="flex items-center nav-logo">
				<img
					src="/ressources/logoLivingSoils.jpg"
					alt="LivingSoils Logo"
					class="nav-logo-icon"
					style="width: 2.5rem; height: 2.5rem;"
				/>
				<span
					class="nav-logo-text text-2xl font-bold"
					style="font-family: var(--font-heading); background: linear-gradient(to right, var(--color-primary), var(--color-primary-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
				>
					LivingSoils
				</span>
			</a>

			<!-- Navigation Links -->
			<div class="hidden md:flex nav-links">
				<a href="/" class="nav-link">Réseau Global</a>
				<a href="/fermes" class="nav-link">Nos Fermes</a>
				<a href="/partenaires" class="nav-link">Partenaires</a>
				<a href="/soutenir" class="nav-link">Nous Soutenir</a>
				<a href="/actualites" class="nav-link">Actualités</a>
			</div>

			<!-- CTA Button -->
			<a
				href="/soutenir"
				class="nav-cta btn btn-outline hidden md:inline-flex"
				style="border-color: #ffffff; color: #ffffff;"
			>
				Rejoignez-nous
			</a>
		</div>
	</div>
</nav>
