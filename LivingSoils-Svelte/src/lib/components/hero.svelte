<script>
    import '../styles/components.css';
    import '../styles/hero.css';

    export let title = 'Réseau Global LivingSoils';
    export let subtitle =
        "Ensemble, cultivons un avenir durable en régénérant nos sols et en soutenant l'agriculture respectueuse de la terre.";

    export let background = '/ressources/hero.webp';
    export let overlay = true;
    export let overlayOpacity = 0.55;
    export let overlayGradient = '';

    export let align = 'left'; // 'left' | 'center' | 'right'
    export let size = 'lg'; // 'sm' | 'md' | 'lg'
    export let textColor = '#fff';

    export let primaryHref = '/fermes';
    export let primaryLabel = 'Découvrir nos fermes';
    export let primaryVariant = 'white'; // 'white' | 'outline'
    export let secondaryHref = '/soutenir';
    export let secondaryLabel = 'Nous rejoindre';
    export let secondaryVariant = 'outline'; // 'white' | 'outline'
    export let showSecondary = true;
</script>

<!-- Hero Section -->
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
						href={primaryHref}
						class="btn {primaryVariant === 'white' ? 'btn-variant-white' : 'btn-variant-outline'}"
					>
						{primaryLabel}
					</a>
				{/if}

				{#if showSecondary && secondaryLabel && secondaryHref}
					<a
						href={secondaryHref}
						class="btn {secondaryVariant === 'white' ? 'btn-variant-white' : 'btn-variant-outline'}"
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
