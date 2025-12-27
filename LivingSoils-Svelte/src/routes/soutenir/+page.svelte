<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import '../../styles/pages/soutenir.css';
	import '../../lib/styles/components.css';
	import { base } from '$app/paths';
	import type { SoutenirData } from '$lib/types';
	export let data: SoutenirData;
</script>

<svelte:head>
	<title>Nous Soutenir - LivingSoils | Rejoignez le Mouvement</title>
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

<Hero
	title="Nous Soutenir"
	subtitle="Rejoignez le mouvement pour la régénération des sols et participez à la construction d'un avenir durable."
	background="/ressources/hero-fermes.webp"
	align="center"
	size="md"
	primaryHref="/partenaires"
	primaryLabel="Nos partenaires"
	secondaryHref="/fermes"
	secondaryLabel="Découvrir nos fermes"
/>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.supportOptions.length === 0}
	<div class="soutenir-container">
		<p class="soutenir-empty">Informations à venir.</p>
	</div>
{:else}
	<div class="soutenir-container row-spread">
		<header class="section-header">
			<h2 class="section-title">Comment nous soutenir ?</h2>
			<p class="section-subtitle">
				Découvrez les différentes façons de contribuer à notre mission.
			</p>
		</header>

		<div class="options-grid">
			{#each data.supportOptions as option, i (i)}
				<article class="option-card">
					<div class="option-card__icon">
						<svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
							<path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/>
						</svg>
					</div>
					<h3 class="option-card__title">{option.title}</h3>
					{#if option.description}
						<p class="option-card__description">{option.description}</p>
					{/if}
					{#if option.link}
						<a
							href={option.link.startsWith('http') ? option.link : `${base}${option.link}`}
							class="option-card__cta"
							target={option.link.startsWith('http') ? '_blank' : undefined}
							rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
						>
							{option.buttonText || 'En savoir plus'}
							<svg
								class="option-card__arrow"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								width="18"
								height="18"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					{/if}
				</article>
			{/each}
		</div>
	</div>
{/if}
