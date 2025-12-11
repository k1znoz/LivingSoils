<script>
	export let data;
</script>

<h1>Nos Fermes</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.farms.length === 0}
	<p>Aucune ferme disponible pour le moment.</p>
{:else}
	<div class="farms-grid">
		{#each data.farms as farm (farm._id)}
			<article class="farm-card">
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
{/if}

<style>
	.farms-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.farm-card {
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
	}

	.farm-card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.farm-card h2 {
		padding: 1rem;
		margin: 0;
	}

	.farm-card p {
		padding: 0 1rem 1rem;
	}

	.location {
		color: #666;
	}
</style>
