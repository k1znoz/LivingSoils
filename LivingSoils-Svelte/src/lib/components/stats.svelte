<script>
	import '../styles/stats.css';
	let { data } = $props();
</script>

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

			<!-- Fermes -->
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
