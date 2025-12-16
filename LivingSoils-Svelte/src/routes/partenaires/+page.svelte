<script>
	import Hero from '$lib/components/Hero.svelte';
	import '../../styles/pages/partenaires.css';
	import '../../lib/styles/components.css';
	export let data;
</script>

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

<div class="page-container">
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
							href={partner.website}
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
