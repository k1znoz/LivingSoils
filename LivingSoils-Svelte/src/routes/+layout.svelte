<script lang="ts">
	import '../lib/styles/global.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
		<div class="container">
			<div class="flex justify-between h-20 items-center">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-3">
					<div
						class="w-10 h-10 rounded-lg flex items-center justify-center"
						style="background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-light));"
					>
						<span class="text-white font-bold text-xl">LS</span>
					</div>
					<span
						class="text-2xl font-bold"
						style="font-family: var(--font-heading); background: linear-gradient(to right, var(--color-primary), var(--color-primary-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
					>
						LivingSoils
					</span>
				</a>

				<!-- Navigation Links -->
				<div class="hidden md:flex gap-8">
					<a href="/" class="nav-link">Réseau Global</a>
					<a href="/fermes" class="nav-link">Nos Fermes</a>
					<a href="/partenaires" class="nav-link">Partenaires</a>
					<a href="/soutenir" class="nav-link">Nous Soutenir</a>
					<a href="/actualites" class="nav-link">Actualités</a>
				</div>

				<!-- CTA Button -->
				<a href="/soutenir" class="btn btn-primary hidden md:inline-flex"> Rejoignez-nous </a>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>
