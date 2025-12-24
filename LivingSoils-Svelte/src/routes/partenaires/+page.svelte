<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import '../../styles/pages/partenaires.css';
	import '../../lib/styles/components.css';
	import { resolve } from '$app/paths';
	import type { PartenairesData } from '$lib/types';
	export let data: PartenairesData;
</script>

<svelte:head>
	<title>Nos Partenaires - LivingSoils | Soutiens de l'Agriculture Durable</title>
	<meta
		name="description"
		content="Découvrez les organisations et entreprises qui soutiennent LivingSoils dans sa mission de régénération des sols et de promotion de l'agriculture durable."
	/>
	<meta
		property="og:title"
		content="Nos Partenaires - LivingSoils | Soutiens de l'Agriculture Durable"
	/>
	<meta
		property="og:description"
		content="Découvrez les organisations et entreprises qui soutiennent LivingSoils dans sa mission de régénération des sols."
	/>
	<meta property="og:url" content="https://thelivingsoils.org/partenaires" />
	<meta name="twitter:title" content="Nos Partenaires - LivingSoils" />
	<meta
		name="twitter:description"
		content="Découvrez les organisations qui soutiennent LivingSoils dans sa mission de régénération des sols."
	/>
</svelte:head>

<Hero
	title="Nos Partenaires"
	subtitle="Découvrez les organisations et entreprises qui soutiennent notre mission de régénération des sols."
	background="/ressources/hero-fermes.webp"
	align="center"
	size="md"
	primaryHref="/soutenir"
	primaryLabel="Devenir partenaire"
	secondaryHref="/fermes"
	secondaryLabel="Découvrir nos fermes"
/>

<div class="partenaires-container">
	<h2 class="page-title">Nos Partenaires</h2>

	{#if data.error}
		<p class="error">Erreur: {data.error}</p>
	{/if}
	{#if data.partners.length === 0}
		<p class="partners-empty">Aucun partenaire pour le moment.</p>
	{:else}
		<div class="partners-grid">
			{#each data.partners as partner (partner._id)}
				<article class="partner-card">
					{#if partner.website}
						<a
							href={resolve(partner.website)}
							target="_blank"
							rel="noopener noreferrer"
							class="partner-card__link"
							aria-label={`Visiter le site de ${partner.name}`}
						>
							{#if partner.logoUrl}
								<img src={partner.logoUrl} alt={partner.name} class="partner-card__logo" />
							{:else}
								<span class="partner-card__name">{partner.name}</span>
							{/if}
						</a>
					{:else if partner.logoUrl}
						<img src={partner.logoUrl} alt={partner.name} class="partner-card__logo" />
					{:else}
						<span class="partner-card__name">{partner.name}</span>
					{/if}
				</article>
			{/each}
		</div>
	{/if}
</div>

<!-- Styles consolidated in src/styles/pages/partenaires.css for consistency -->
