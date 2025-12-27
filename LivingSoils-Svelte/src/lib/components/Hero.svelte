<script lang="ts">
	import '../styles/components.css';
	import '../styles/hero.css';
	import { base } from '$app/paths';

	// Types explicites pour toutes les props (script d'instance)
	export let title: string = 'Réseau Global LivingSoils';
	export let subtitle: string =
		"Ensemble, cultivons un avenir durable en régénérant nos sols et en soutenant l'agriculture respectueuse de la terre.";

	export let background: string = '/ressources/hero.webp';
	export let overlay: boolean = true;
	export let overlayOpacity: number = 0.55;
	export let overlayGradient: string = '';

	export let align: 'left' | 'center' | 'right' = 'left';
	export let size: 'sm' | 'md' | 'lg' = 'lg';
	export let textColor: string = '#fff';

	export let primaryHref: string = '/fermes';
	export let primaryLabel: string = 'Découvrir nos fermes';
	export let primaryVariant: 'white' | 'outline' = 'white';
	export let secondaryHref: string = '/soutenir';
	export let secondaryLabel: string = 'Nous rejoindre';
	export let secondaryVariant: 'white' | 'outline' = 'outline';
	export let showSecondary: boolean = true;
</script>

<section
	class="hero page-gutter row-spread {`align-${align}`} {`size-${size}`}"
	style={`--hero-bg: url('${background}'); --hero-text: ${textColor};`}
>
	{#if overlay}
		<div
			class="hero-overlay"
			style={`--hero-overlay: ${overlayGradient || `rgba(0,0,0,${overlayOpacity})`};`}
		></div>
	{/if}

	<div class="container-wide hero-content content-wrap">
		<div class="max-w-3xl content-margin">
			{#if title}
				<h1 class="hero-title">{title}</h1>
			{/if}

			{#if subtitle}
				<p class="hero-subtitle">{subtitle}</p>
			{/if}

			<div class="row-spread hero-actions">
				{#if primaryLabel && primaryHref}
					<a
						href="{base}{primaryHref}"
						class="primary-btn-hero btn-hero btn {primaryVariant === 'white'
							? 'btn-variant-white'
							: 'btn-variant-outline'}"
					>
						{primaryLabel}
					</a>
				{/if}

				{#if showSecondary && secondaryLabel && secondaryHref}
					<a
						href="{base}{secondaryHref}"
						class="btn-hero btn {secondaryVariant === 'white'
							? 'btn-variant-white'
							: 'btn-variant-outline'}"
					>
						{secondaryLabel}
					</a>
				{/if}

				<!-- Slot pour CTAs custom -->
				<slot name="actions" />
			</div>

			<!-- Slot pour contenu additionnel -->
			<slot />
		</div>
	</div>
</section>
