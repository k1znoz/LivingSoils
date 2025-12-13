<script>
	import "../../styles/pages/partenaires.css";
	import "../../lib/styles/components.css";
	export let data;
</script>

<h1 class="page-title">Nos Partenaires</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.partners.length === 0}
	<div class="page-container">
		<p>Aucun partenaire pour le moment.</p>
	</div>
{:else}
	<div class="page-container">
		<div class="logo-grid">
			{#each data.partners as partner (partner._id)}
				<article class="logo-item">
					{#if partner.website}
						<a
							href={partner.website}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Aller au site de ${partner.name}`}
						>
							{#if partner.logoUrl}
								<img src={partner.logoUrl} alt={partner.name} />
							{:else}
								<span class="partner-fallback">{partner.name}</span>
							{/if}
						</a>
					{:else if partner.logoUrl}
						<img src={partner.logoUrl} alt={partner.name} />
					{:else}
						<span class="partner-fallback">{partner.name}</span>
					{/if}
				</article>
			{/each}
		</div>
	</div>
{/if}

<!-- Styles consolidated in src/styles/pages/partenaires.css for consistency -->
