<script lang="ts">
	import '../../styles/pages/soutenir.css';
	import '../../lib/styles/components.css';
	import { base } from '$app/paths';
	import type { SoutenirData } from '$lib/types';
	export let data: SoutenirData;
</script>

<svelte:head>
	<meta
		name="description"
		content="Soutenez LivingSoils et participez à la régénération des sols. Devenez partenaire, proposez votre ferme ou contribuez au développement de l'agriculture régénérative."
	/>
	<meta property="og:title" content="Nous Soutenir - LivingSoils | Rejoignez le Mouvement" />
	<meta
		property="og:description"
		content="Soutenez LivingSoils et participez à la régénération des sols. Devenez partenaire ou proposez votre ferme."
	/>
	<meta property="og:url" content="https://thelivingsoils.org/soutenir" />
	<meta name="twitter:title" content="Nous Soutenir - LivingSoils" />
	<meta
		name="twitter:description"
		content="Soutenez LivingSoils et participez à la régénération des sols."
	/>
</svelte:head>

<h1 class="page-title">Nous Soutenir</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.supportOptions.length === 0}
	<div class="page-container">
		<p>Informations à venir.</p>
	</div>
{:else}
	<div class="page-container">
		<div class="options">
			{#each data.supportOptions as option, i (i)}
				<article class="option card">
					<h2>{option.title}</h2>
					{#if option.description}
						<p>{option.description}</p>
					{/if}
					{#if option.link}
						<a
							href={option.link.startsWith('http') ? option.link : `${base}${option.link}`}
							class="cta-button"
						>
							{option.buttonText || 'En savoir plus'}
						</a>
					{/if}
				</article>
			{/each}
		</div>
	</div>
{/if}
