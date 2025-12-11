<script>
	import '../styles/components.css';
	export let data;
</script>

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
