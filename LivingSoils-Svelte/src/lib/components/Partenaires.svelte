<script context="module" lang="ts">
	// Shape returned by homepage loader
</script>

<script lang="ts">
	import '../../styles/pages/partenaires.css';
	import '../../lib/styles/components.css';
	import type { Partner } from '$lib/types';
    import { resolve } from '$app/paths';

	// Accept dynamic partners from homepage
	export let partners: Partner[] = [];
	// Optional: allow limiting visible items
	export let limit: number = 8;
	const visiblePartners: Partner[] = Array.isArray(partners) ? partners.slice(0, limit) : [];
</script>

<section class="section page-gutter row-spread partners-section-bg">
	<div class="container-wide row-spread">
		<div class="text-center">
			<span class="text-sm font-semibold uppercase tracking-wider section-accent">
				Nos Partenaires
			</span>
			<h2 class="section-title mt-2 mb-4">Ensemble pour Régénérer les Sols</h2>
			<p class="section-subtitle mx-auto max-w-2xl">
				Nous collaborons avec des organisations de premier plan pour amplifier notre impact mondial
			</p>
		</div>

		{#if visiblePartners.length > 0}
			<div class=" partners-grid">
				{#each visiblePartners as p (p._id)}
					<div class="partner-card">
						{#if p.website}
							<a
								href={resolve(p.website)}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visiter ${p.name}`}
							>
								{#if p.logoUrl}
									<img src={p.logoUrl} alt={p.name} class="partner-logo" />
								{:else}
									<div class="partner-fallback" aria-hidden="true">{p.name}</div>
								{/if}
							</a>
						{:else if p.logoUrl}
							<img src={p.logoUrl} alt={p.name} class="partner-logo" />
						{:else}
							<div class="partner-fallback" aria-hidden="true">{p.name}</div>
						{/if}
					</div>
				{/each}
			</div>
		{:else}
			<div class="partners-empty text-center">
				<p class="section-subtitle">Les partenaires seront bientôt affichés.</p>
			</div>
		{/if}

		<div class="text-center mt-12">
			<a href={resolve('/partenaires')} class="btn btn-outline"> Découvrir tous nos partenaires </a>
		</div>
	</div>
</section>
