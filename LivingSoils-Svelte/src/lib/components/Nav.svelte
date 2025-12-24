<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
    import { resolve } from '$app/paths';
	import '../styles/nav.css';
	import type { MenuItem } from '$lib/types';

	// Standard Svelte reactivity with explicit types
	let scrolled: boolean = false;
	let navReady: boolean = false;
	let mobileMenuOpen: boolean = false;

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

	const menuItems: MenuItem[] = [
		{ label: 'Accueil', href: '/' },
		{ label: 'Fermes', href: '/fermes' },
		{ label: 'Actualités', href: '/actualites' },
		{ label: 'Partenaires', href: '/partenaires' }
	];

	// Reactively track current path from $page store
	let currentPath: string = '/';
	$: currentPath = $page.url.pathname;

	function setBodyScrollLock(locked: boolean): void {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = locked ? 'hidden' : '';
	}

	let dialogEl: HTMLDivElement | null = null;

	function toggleMobileMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
		setBodyScrollLock(mobileMenuOpen);
		if (mobileMenuOpen) {
			// Focus the dialog for a11y and keyboard handling
			tick().then(() => {
				const firstLink = dialogEl?.querySelector<HTMLAnchorElement>('.mobile-menu-link');
				if (firstLink) firstLink.focus();
				else dialogEl?.focus();
			});
		}
	}

	function closeMobileMenu(): void {
		mobileMenuOpen = false;
		setBodyScrollLock(false);
	}

	function handleKeydown(e: KeyboardEvent): void {
		if (e.key === 'Escape' && mobileMenuOpen) {
			closeMobileMenu();
		}
	}

	function handleDialogKeydown(e: KeyboardEvent): void {
		if (e.key === 'Escape') {
			closeMobileMenu();
			return;
		}

		// Trap focus within the dialog
		if (e.key === 'Tab' && dialogEl) {
			const focusable = Array.from(
				dialogEl.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
				)
			);
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const active = document.activeElement as HTMLElement | null;
			if (e.shiftKey) {
				if (!active || active === first || active === dialogEl) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (active === last) {
					e.preventDefault();
					first.focus();
				}
			}
		}

		// Close on Enter/Space only when pressing on the backdrop itself
		if ((e.key === 'Enter' || e.key === ' ' || e.key === 'Space') && e.target === dialogEl) {
			closeMobileMenu();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<nav
	class="main-nav w-screen"
	class:scrolled
	class:ready={navReady}
	class:menu-open={mobileMenuOpen}
>
	<div class="nav-container">
		<!-- Logo à gauche -->
		<a href={resolve('/')} class="logo-link nav-item" style="--delay: 0">
			<img src="/ressources/logoLivingSoils.jpg" alt="Living Soils" class="logo" />
		</a>

		<!-- Menu centré - Desktop -->
		<ul class="menu desktop-menu">
			{#each menuItems as item, i (item.href)}
				<li class="nav-item" style="--delay: {i + 1}">
					<a href={resolve(item.href)} class="menu-link" class:active={currentPath === item.href}>
						<span class="link-text">{item.label}</span>
						<span class="link-seed"></span>
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA à droite - Desktop -->
		<div class="nav-item cta-wrapper desktop-cta" style="--delay: {menuItems.length + 1}">
			<a href={resolve('/soutenir')} class="nav-cta">
				<span class="nav-cta-text">Rejoignez-nous</span>
			</a>
		</div>

		<!-- Bouton Hamburger - Mobile -->
		<button
			class="hamburger nav-item"
			class:open={mobileMenuOpen}
			on:click={toggleMobileMenu}
			aria-label="Menu"
			aria-controls="mobile-menu"
			aria-expanded={mobileMenuOpen}
			style="--delay: {menuItems.length + 1}"
		>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		</button>
	</div>

	<!-- Menu Mobile (JS-driven rendering) -->
	{#if mobileMenuOpen}
		<div
			id="mobile-menu"
			class="mobile-menu open"
			role="dialog"
			aria-modal="true"
			aria-label="Navigation"
			tabindex="-1"
			bind:this={dialogEl}
			on:click={closeMobileMenu}
			on:keydown={handleDialogKeydown}
		>
			<button
				type="button"
				class="mobile-close"
				aria-label="Fermer le menu"
				on:click={closeMobileMenu}>✕</button
			>
			<ul
				class="mobile-menu-list"
				role="menu"
				aria-label="Menu principal"
				on:click|stopPropagation
				on:keydown|stopPropagation
			>
				{#each menuItems as item, i (item.href)}
					<li class="mobile-menu-item" style="--delay: {i}">
						<a
							href={resolve(item.href)}
							class="mobile-menu-link"
							role="menuitem"
							class:active={currentPath === item.href}
							on:click={closeMobileMenu}
						>
							<span class="link-text">{item.label}</span>
							<span class="link-seed"></span>
						</a>
					</li>
				{/each}
				<li class="mobile-menu-item mobile-cta-item" style="--delay: {menuItems.length}">
					<a
						href={resolve('/soutenir')}
						class="nav-cta mobile-cta"
						role="menuitem"
						on:click={closeMobileMenu}
					>
						<span class="cta-overlay"></span>
						<span class="nav-cta-text">Rejoignez-nous</span>
					</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>
