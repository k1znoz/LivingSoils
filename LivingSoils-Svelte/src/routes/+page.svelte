<script>
  export let data;
</script>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-overlay"></div>
	<div class="container hero-content">
		<div class="max-w-3xl">
			<h1 class="text-6xl font-bold mb-6" style="font-family: var(--font-heading);">
				Réseau Global LivingSoils
			</h1>
			<p class="text-xl mb-8" style="color: rgba(255, 255, 255, 0.9); line-height: 1.75;">
				Ensemble, cultivons un avenir durable en régénérant nos sols et en soutenant l'agriculture
				respectueuse de la terre.
			</p>
			<div class="flex gap-4">
				<a href="/fermes" class="btn bg-white" style="color: var(--color-primary);">
					Découvrir nos fermes
				</a>
				<a
					href="/soutenir"
					class="btn border-2 border-white text-white"
					style="background: transparent;"
				>
					Nous rejoindre
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="section" style="background-color: var(--color-earth-100);">
	<div class="container">
		<div class="grid md:grid-cols-3 gap-8 text-center">
			<div>
				<div
					class="text-5xl font-bold mb-2"
					style="font-family: var(--font-heading); color: var(--color-primary);"
				>
					{data.farmCount || 0}
				</div>
				<p class="text-lg" style="color: var(--color-text-light);">Fermes partenaires</p>
			</div>
			<div>
				<div
					class="text-5xl font-bold mb-2"
					style="font-family: var(--font-heading); color: var(--color-primary);"
				>
					50+
				</div>
				<p class="text-lg" style="color: var(--color-text-light);">Pays représentés</p>
			</div>
			<div>
				<div
					class="text-5xl font-bold mb-2"
					style="font-family: var(--font-heading); color: var(--color-primary);"
				>
					10k+
				</div>
				<p class="text-lg" style="color: var(--color-text-light);">Hectares régénérés</p>
			</div>
		</div>
	</div>
</section>

<!-- Pages Preview -->
<section class="section">
	<div class="container">
		<h2 class="section-title text-center mb-4">Explorez notre réseau</h2>
		<p class="section-subtitle text-center mx-auto mb-12">
			Découvrez nos initiatives, rencontrez nos partenaires et rejoignez le mouvement
		</p>

		<div class="grid-auto">
			<a href="/fermes" class="card group">
				<div class="image-overlay-container">
					<div
						class="card-image"
						style="background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-light));"
					></div>
					<div class="image-overlay"></div>
				</div>
				<div class="p-6">
					<h3 class="card-title mb-3">Nos Fermes</h3>
					<p class="mb-4" style="color: var(--color-text-light);">
						Découvrez nos {data.farmCount || 0} fermes partenaires à travers le monde
					</p>
					<span
						class="font-medium inline-flex items-center gap-1 transition-all"
						style="color: var(--color-primary);"
					>
						Explorer →
					</span>
				</div>
			</a>

			<a href="/partenaires" class="card group">
				<div class="image-overlay-container">
					<div
						class="card-image"
						style="background: linear-gradient(to bottom right, var(--color-accent), var(--color-accent-light));"
					></div>
					<div class="image-overlay"></div>
				</div>
				<div class="p-6">
					<h3 class="card-title mb-3">Partenaires</h3>
					<p class="mb-4" style="color: var(--color-text-light);">
						Nos collaborateurs et soutiens pour un avenir durable
					</p>
					<span
						class="font-medium inline-flex items-center gap-1 transition-all"
						style="color: var(--color-primary);"
					>
						Découvrir →
					</span>
				</div>
			</a>

			<a href="/soutenir" class="card group">
				<div class="image-overlay-container">
					<div
						class="card-image"
						style="background: linear-gradient(to bottom right, var(--color-ocean), var(--color-ocean-light));"
					></div>
					<div class="image-overlay"></div>
				</div>
				<div class="p-6">
					<h3 class="card-title mb-3">Nous Soutenir</h3>
					<p class="mb-4" style="color: var(--color-text-light);">
						Rejoignez notre mouvement et participez à la régénération
					</p>
					<span
						class="font-medium inline-flex items-center gap-1 transition-all"
						style="color: var(--color-primary);"
					>
						Rejoindre →
					</span>
				</div>
			</a>

			<a href="/actualites" class="card group">
				<div class="image-overlay-container">
					<div
						class="card-image"
						style="background: linear-gradient(to bottom right, var(--color-earth-500), var(--color-earth-700));"
					></div>
					<div class="image-overlay"></div>
				</div>
				<div class="p-6">
					<h3 class="card-title mb-3">Actualités</h3>
					<p class="mb-4" style="color: var(--color-text-light);">
						Les dernières nouvelles de notre réseau mondial
					</p>
					<span
						class="font-medium inline-flex items-center gap-1 transition-all"
						style="color: var(--color-primary);"
					>
						Lire →
					</span>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section
	class="section text-white"
	style="background: linear-gradient(to right, var(--color-primary-dark), var(--color-primary));"
>
	<div class="container text-center">
		<h2 class="text-4xl font-bold mb-4" style="font-family: var(--font-heading);">
			Prêt à faire la différence ?
		</h2>
		<p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
			Rejoignez notre réseau global et participez à la régénération des sols
		</p>
		<a href="/soutenir" class="btn bg-white" style="color: var(--color-primary);">
			Devenir membre
		</a>
	</div>
</section>
