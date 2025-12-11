<script>
	export let data;
</script>

<!-- Hero Section -->
<section
	class="hero page-gutter row-spread"
	style="background-image: url('/ressources/hero.webp'); background-size: cover; background-position: center;"
>
	<div class="hero-overlay"></div>
	<div class="container-wide hero-content content-wrap" style="padding-top: 6rem;">
		<div class="max-w-3xl content-margin">
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

<!-- Section Fermes -->
<section class="section page-gutter content-margin row-spread">
	<div class="container-wide">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Texte explicatif -->
			<div class="space-y-6">
				<div>
					<span
						class="text-sm font-semibold uppercase tracking-wider"
						style="color: var(--color-primary);"
					>
						Notre Mission
					</span>
					<h2 class="section-title mt-2 mb-4">Des Fermes Régénératrices</h2>
				</div>

				<p class="text-lg leading-relaxed" style="color: var(--color-text);">
					Le projet <strong>Living Soils</strong> accompagne un réseau mondial de fermes engagées dans
					la régénération des sols. Chaque ferme partenaire applique des pratiques agroécologiques innovantes
					qui restaurent la biodiversité et la fertilité naturelle des terres.
				</p>

				<div class="space-y-4">
					<div class="flex gap-4">
						<div
							class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
							style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));"
						>
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold mb-1" style="color: var(--color-text);">
								Agriculture Régénératrice
							</h3>
							<p style="color: var(--color-text-light);">
								Techniques qui améliorent la santé des sols tout en produisant des aliments de
								qualité
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div
							class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
							style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));"
						>
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold mb-1" style="color: var(--color-text);">
								Biodiversité Restaurée
							</h3>
							<p style="color: var(--color-text-light);">
								Réintroduction d'espèces locales et création d'écosystèmes résilients
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div
							class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
							style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));"
						>
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold mb-1" style="color: var(--color-text);">Impact Mesurable</h3>
							<p style="color: var(--color-text-light);">
								Suivi scientifique de la santé des sols et des résultats environnementaux
							</p>
						</div>
					</div>
				</div>

				<div class="pt-4">
					<a href="/fermes" class="btn btn-primary">
						Découvrir nos {data.farmCount || 0} fermes
					</a>
				</div>
			</div>

			<!-- Espace vidéo -->
			<div class="relative">
				<div
					class="aspect-video rounded-2xl overflow-hidden shadow-2xl"
					style="background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-light));"
				>
					<!-- Placeholder pour la vidéo -->
					<div class="w-full h-full flex items-center justify-center">
						<div class="text-center text-white p-8">
							<svg
								class="w-20 h-20 mx-auto mb-4 opacity-50"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
								/>
							</svg>
							<p class="text-lg font-medium">Vidéo à venir</p>
							<p class="text-sm opacity-75 mt-2">
								Découvrez le fonctionnement d'une ferme régénératrice
							</p>
						</div>
					</div>

					<!-- Pour intégrer une vraie vidéo plus tard :
                    <iframe 
                        src="URL_YOUTUBE_OU_VIMEO" 
                        title="Vidéo fermes" 
                        class="w-full h-full"
                        allowfullscreen
                    ></iframe>
                    -->
				</div>

				<!-- Badge décoratif -->
				<div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
					<div class="text-4xl font-bold" style="color: var(--color-primary);">
						{data.farmCount || 0}
					</div>
					<p class="text-sm font-medium" style="color: var(--color-text-light);">Fermes actives</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section
	class="section page-gutter stats-section row-spread"
	style="
        background-image: linear-gradient(rgba(62, 39, 35, 0.85), rgba(87, 57, 45, 0.9)), url('/ressources/ferme-vu-du-haut-768x.webp');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    "
>
	<div class="container-wide">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold mb-4" style="font-family: var(--font-heading); color: #f5e6d3;">
				Notre Impact en Chiffres
			</h2>
			<p class="text-lg max-w-2xl mx-auto" style="color: rgba(245, 230, 211, 0.85);">
				Des résultats concrets pour la régénération des sols et l'autonomie agricole
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Valorisation des déchets -->
			<div class="stat-card">
				<div class="stat-icon-wrapper">
					<svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="stat-number">60t</div>
				<div class="stat-label">Déchets valorisés/mois</div>
				<div class="stat-details">
					→ 12t de fertilisant naturel<br />
					→ 8t de protéines (larves)<br />
					→ 24 hectares régénérés<br />
					→ 12 000 poulets nourris
				</div>
			</div>

			<!-- Réduction des coûts -->
			<div class="stat-card">
				<div class="stat-icon-wrapper">
					<svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
						/>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="stat-number">-40%</div>
				<div class="stat-label">Coûts de production</div>
				<div class="stat-details">
					Grâce aux fertilisants naturels,<br />
					les coopératives réduisent<br />
					drastiquement leurs dépenses
				</div>
			</div>

			<!-- Autonomie chimique -->
			<div class="stat-card">
				<div class="stat-icon-wrapper">
					<svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="stat-number">90%</div>
				<div class="stat-label">Produits chimiques éliminés</div>
				<div class="stat-details">
					Autonomie complète vis-à-vis<br />
					des intrants chimiques importés<br />
					pour une agriculture saine
				</div>
			</div>

			<!-- Emplois créés -->
			<div class="stat-card">
				<div class="stat-icon-wrapper">
					<svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
						/>
					</svg>
				</div>
				<div class="stat-number">50+</div>
				<div class="stat-label">Emplois créés</div>
				<div class="stat-details">
					20 emplois directs<br />
					+ 30 emplois indirects<br />
					dans l'écosystème local
				</div>
			</div>

			<!-- Formation femmes -->
			<div class="stat-card">
				<div class="stat-icon-wrapper">
					<svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
						/>
					</svg>
				</div>
				<div class="stat-number">60+</div>
				<div class="stat-label">Femmes formées</div>
				<div class="stat-details">
					Formation à l'élevage de la<br />
					mouche soldat noire et à<br />
					l'agriculture régénérative
				</div>
			</div>

			<!-- Fermes partenaires -->
			<div class="stat-card">
				<div class="stat-icon-wrapper">
					<svg class="stat-icon" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="stat-number">{data.farmCount || 0}</div>
				<div class="stat-label">Fermes régénératrices</div>
				<div class="stat-details">
					Réseau mondial de fermes<br />
					engagées dans la régénération<br />
					des sols et la biodiversité
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Fondateurs -->
<section class="section page-gutter content-margin row-spread">
	<div class="container-wide">
		<div class="text-center mb-12">
			<span
				class="text-sm font-semibold uppercase tracking-wider"
				style="color: var(--color-primary);"
			>
				L'Équipe
			</span>
			<h2 class="section-title mt-2 mb-4">Les Fondateurs</h2>
			<p class="section-subtitle mx-auto max-w-2xl">
				Portée par Morgane Breuil et Arthur de Dinechin, Living Soils explore le rôle clé des
				organismes vivants dans la régénération des sols à travers le monde.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12">
			<!-- Morgane Breuil -->
			<div class="space-y-6">
				<div class="relative group">
					<div class="aspect-4/5 rounded-2xl overflow-hidden shadow-xl">
						<img
							src="/ressources/morgane_breuil_portrait768x888.webp"
							alt="Morgane Breuil"
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div
						class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-2xl"
					>
						<h3
							class="text-2xl font-bold text-white mb-1"
							style="font-family: var(--font-heading);"
						>
							Morgane Breuil
						</h3>
						<p class="text-white/90 font-medium">Co-fondatrice</p>
					</div>
				</div>

				<div class="space-y-4">
					<p style="color: var(--color-text);" class="leading-relaxed">
						Passionnée par l'agroécologie et la biodiversité, Morgane apporte son expertise en
						sciences de l'environnement et sa vision d'une agriculture régénératrice au service de
						la planète.
					</p>
					<div class="flex gap-3">
						<a
							href="#"
							class="text-sm font-medium flex items-center gap-2 transition-colors"
							style="color: var(--color-primary);"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
							LinkedIn
						</a>
					</div>
				</div>
			</div>

			<!-- Arthur de Dinechin -->
			<div class="space-y-6">
				<div class="relative group">
					<div class="aspect-4/5 rounded-2xl overflow-hidden shadow-xl">
						<img
							src="/ressources/arthur_de_dinechin768x888.webp"
							alt="Arthur de Dinechin"
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div
						class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-2xl"
					>
						<h3
							class="text-2xl font-bold text-white mb-1"
							style="font-family: var(--font-heading);"
						>
							Arthur de Dinechin
						</h3>
						<p class="text-white/90 font-medium">Co-fondateur</p>
					</div>
				</div>

				<div class="space-y-4">
					<p style="color: var(--color-text);" class="leading-relaxed">
						Fort d'une expérience en gestion de projets environnementaux, Arthur coordonne le réseau
						mondial de fermes et développe les partenariats stratégiques de Living Soils.
					</p>
					<div class="flex gap-3">
						<a
							href="#"
							class="text-sm font-medium flex items-center gap-2 transition-colors"
							style="color: var(--color-primary);"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Galerie -->

<section
	class="section page-gutter row-spread"
	style="
        background-image: linear-gradient(rgba(62, 39, 35, 0.85), rgba(87, 57, 45, 0.9)), url('/ressources/RichSoil.webp');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    "
>
	<div class="container-wide">
		<div class="text-center mb-8">
			<h3 class="text-2xl font-bold" style="color: #5a3a2a; font-family: var(--font-heading);">
				Sur le Terrain
			</h3>
		</div>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="relative rounded-xl overflow-hidden shadow-lg group">
				<img
					src="/ressources/FemmeFormationFerme.webp"
					alt="Formation des femmes"
					class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div
					class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent"
				></div>
			</div>
			<div class="relative rounded-xl overflow-hidden shadow-lg group">
				<img
					src="/ressources/FermePoulets.webp"
					alt="Élevage de poulets"
					class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
					style=""
				/>
				<div
					class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent"
				></div>
			</div>

			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-4/5">
				<img
					src="/ressources/MoucheSoldatNoir.webp"
					alt="Mouche soldat noire"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div
					class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent"
				></div>
			</div>
		</div>
	</div>
</section>

<!-- Actualités -->
<section class="section page-gutter content-margin row-spread">
	<div class="container-wide">
		<h2 class="section-title text-center mb-4">Nos Dernières Actualités</h2>
		<p class="section-subtitle text-center mx-auto mb-12">
			Suivez les dernières nouvelles de notre réseau mondial et nos actions pour la régénération des
			sols
		</p>

		<div class="grid-auto">
			{#if data.posts && data.posts.length > 0}
				{#each data.posts.slice(0, 4) as post (post._id)}
					<a href="/actualites/{post.slug.current}" class="card group">
						<div class="image-overlay-container">
							{#if post.mainImage}
								<img
									src={post.mainImage}
									alt={post.title}
									class="card-image"
									style="object-fit: cover;"
								/>
							{:else}
								<div
									class="card-image"
									style="z-index: 10; background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-light));"
								></div>
							{/if}
							<div class="image-overlay"></div>
						</div>
						<div
							class="p-6"
							style="z-index: -10;        background: linear-gradient(135deg, #6d4c41, #8b5a3c);
        opacity: 0.95;"
						>
							<div class="flex items-center gap-2 mb-3">
								<span class="text-sm font-medium" style="color: var(--color-primary);">
									{new Date(post.publishedAt).toLocaleDateString('fr-FR', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</span>
							</div>
							<h3 class="card-title mb-3">{post.title}</h3>
							<p class="mb-4 line-clamp-3" style="color: var(--color-text-light);">
								{post.excerpt || 'Découvrez cette actualité...'}
							</p>
							<span
								class="font-medium inline-flex items-center gap-1 transition-all"
								style="color: var(--color-primary);"
							>
								Lire la suite →
							</span>
						</div>
					</a>
				{/each}
			{:else}
				<div class="col-span-full text-center py-12">
					<p style="color: var(--color-text-light);">Aucune actualité pour le moment</p>
				</div>
			{/if}
		</div>

		{#if data.posts && data.posts.length > 4}
			<div class="text-center mt-12">
				<a href="/actualites" class="btn btn-outline"> Voir toutes les actualités </a>
			</div>
		{/if}
	</div>
</section>

<!-- Section Partenaires -->
<section
	class="section page-gutter row-spread"
	style="
        background-image: linear-gradient(rgba(62, 39, 35, 0.85), rgba(87, 57, 45, 0.9)), url('/ressources/RichSoil.webp');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    "
>
	<div class="container-wide">
		<div class="text-center mb-12">
			<span class="text-sm font-semibold uppercase tracking-wider" style="color: #8b5a3c;">
				Nos Partenaires
			</span>
			<h2 class="section-title mt-2 mb-4">Ensemble pour Régénérer les Sols</h2>
			<p class="section-subtitle mx-auto max-w-2xl">
				Nous collaborons avec des organisations de premier plan pour amplifier notre impact mondial
			</p>
		</div>

		<div class="partners-grid">
			<!-- FAO -->
			<div class="partner-card">
				<img
					src="/ressources/logo_partenaires/FAO_logo-1.png"
					alt="FAO - Organisation des Nations Unies pour l'alimentation et l'agriculture"
					class="partner-logo"
				/>
			</div>

			<!-- Explore -->
			<div class="partner-card">
				<img
					src="/ressources/logo_partenaires/logo_black_EXPLORE.svg"
					alt="Explore"
					class="partner-logo"
				/>
			</div>

			<!-- The Living Soil -->
			<div class="partner-card">
				<img
					src="/ressources/logo_partenaires/the_living_soil_logo.jpg"
					alt="The Living Soil"
					class="partner-logo"
				/>
			</div>

			<!-- UNGP -->
			<div class="partner-card">
				<img
					src="/ressources/logo_partenaires/UNGP_WhiteLogo.png"
					alt="UN Guiding Principles"
					class="partner-logo"
				/>
			</div>
		</div>

		<div class="text-center mt-12">
			<a href="/partenaires" class="btn btn-outline"> Découvrir tous nos partenaires </a>
		</div>
	</div>
</section>

<style>
	.stat-card {
		background: linear-gradient(135deg, #faf7f2 0%, #f5e6d3 100%);
		border-radius: 1rem;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 10px 30px rgba(62, 39, 35, 0.3);
		border: 1px solid rgba(139, 90, 60, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.stat-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 15px 40px rgba(62, 39, 35, 0.4);
		border-color: rgba(139, 90, 60, 0.2);
	}

	.stat-icon-wrapper {
		width: 4rem;
		height: 4rem;
		margin: 0 auto 1rem;
		background: linear-gradient(135deg, #8b5a3c, #a0724f);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(139, 90, 60, 0.3);
	}

	.stat-icon {
		width: 2rem;
		height: 2rem;
		color: #faf7f2;
	}

	.stat-number {
		font-size: 3rem;
		font-weight: 700;
		font-family: var(--font-heading);
		background: linear-gradient(135deg, #8b5a3c, #a0724f);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-size: 1.125rem;
		font-weight: 600;
		color: #5a3a2a;
		margin-bottom: 1rem;
	}

	.stat-details {
		font-size: 0.875rem;
		color: #7d5a45;
		line-height: 1.6;
	}

	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.partners-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.partners-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.partner-card {
		background: linear-gradient(135deg, #6d4c41, #8b5a3c);
		opacity: 0.95;
		border-radius: 1rem;
		padding: 2.5rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(62, 39, 35, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		min-height: 180px;
	}

	.partner-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 8px 24px rgba(62, 39, 35, 0.15);
	}

	.partner-logo {
		max-width: 100%;
		max-height: 100px;
		width: auto;
		height: auto;
		object-fit: contain;
		filter: grayscale(20%);
		opacity: 0.85;
		transition:
			filter 0.3s ease,
			opacity 0.3s ease;
	}

	.partner-card:hover .partner-logo {
		filter: grayscale(0%);
		opacity: 1;
	}
</style>
