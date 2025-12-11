<script>
	export let data;
</script>

<h1>Nos Partenaires</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.partners.length === 0}
	<p>Aucun partenaire pour le moment.</p>
{:else}
	<div class="partners-grid">
		{#each data.partners as partner (partner._id)}
			<article class="partner-card">
				{#if partner.logoUrl}
					<img src={partner.logoUrl} alt={partner.name} />
				{/if}
				<h2>{partner.name}</h2>
				{#if partner.description}
					<p>{partner.description}</p>
				{/if}
				{#if partner.website}
					<a href={partner.website} target="_blank" rel="noopener noreferrer">
						Visiter le site →
					</a>
				{/if}
			</article>
		{/each}
	</div>
{/if}

<style>
	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.partner-card {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
	}

	.partner-card img {
		max-width: 150px;
		height: auto;
		margin-bottom: 1rem;
	}
</style>
