<script>
    // Hero réutilisable
    import Hero from "$lib/components/Hero.svelte";
    import MapFarms from "$lib/components/MapFarms.svelte";
    // Styles page
    import "../../styles/pages/fermes.css";
    import "../../lib/styles/components.css";
	
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
		<div class="page-container">
			<p>Aucune ferme disponible pour le moment.</p>
		</div>
	{:else}
		<div class="page-container">
			<div class="page-grid">
				{#each data.farms as farm (farm._id)}
					<article class="card">
						{#if farm.imageUrl}
							<img src={farm.imageUrl} alt={farm.name} />
						{/if}
						<h2>{farm.name}</h2>
						{#if farm.location}
							<p class="location">📍 {farm.location}</p>
						{/if}
						{#if farm.description}
							<p>{farm.description}</p>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Section Carte -->
	<section id="carte" class="row-spread">
		<h2 class="page-title">Carte des fermes</h2>
		<MapFarms farms={data.farms} />
	</section>
</div>
