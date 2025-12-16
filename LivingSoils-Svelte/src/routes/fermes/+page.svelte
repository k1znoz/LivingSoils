<script>
	// Hero réutilisable
	import Hero from '$lib/components/Hero.svelte';
	import MapFarms from '$lib/components/MapFarms.svelte';
	// Styles page
	import '../../styles/pages/fermes.css';
	import '../../lib/styles/components.css';

	export let data;
</script>

<Hero
	title="Nos fermes"
	subtitle="Découvrez les fermes engagées dans la régénération des sols."
	background="/ressources/hero-fermes.webp"
	align="center"
	size="md"
	primaryHref="/fermes#carte"
	primaryLabel="Voir la carte"
	secondaryHref="/soutenir"
	secondaryLabel="Proposer une ferme"
/>

<div class="page-container">
	<h1 class="page-title row-spread">Nos Fermes</h1>

	{#if data.error}
		<p class="error">Erreur: {data.error}</p>
	{/if}

	{#if data.farms.length === 0}
		<p class="farms-empty">Aucune ferme disponible pour le moment.</p>
	{:else}
		<div class="farms-grid">
			{#each data.farms as farm (farm._id)}
				<article class="farm-card">
					{#if farm.imageUrl}
						<div class="farm-card__image-container">
							<img src={farm.imageUrl} alt={farm.name} class="farm-card__image" />
						</div>
					{/if}
					<div class="farm-card__content">
						<h2 class="farm-card__title">{farm.name}</h2>
						{#if farm.location}
							<p class="farm-card__location">📍 {farm.location}</p>
						{/if}
						{#if farm.description}
							<p class="farm-card__description">{farm.description}</p>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	{/if}

	<!-- Section Carte -->
	<section id="carte" class="farms-map-section">
		<h2 class="page-title">Carte des fermes</h2>
		<MapFarms farms={data.farms} />
	</section>
</div>
