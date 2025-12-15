<script lang="ts">
	import { onMount } from 'svelte';
	import '../styles/components.css';
	import '../styles/ferme.css';
	
	let { data } = $props();

	let isVideoPlaying = $state(false);

	onMount(() => {
		// Vérifier si l'API YouTube est déjà chargée
		if (typeof window !== 'undefined' && window.YT?.Player) {
			initPlayer();
			return;
		}

		// Charger l'API YouTube si pas déjà présente
		if (typeof document !== 'undefined' && !document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			const firstScriptTag = document.getElementsByTagName('script')[0];
			if (firstScriptTag && firstScriptTag.parentNode) {
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			}
		}

		// L'API appelle cette fonction quand elle est prête
		if (typeof window !== 'undefined') {
			window.onYouTubeIframeAPIReady = initPlayer;
		}
	});

	function initPlayer() {
		if (typeof window === 'undefined' || !window.YT) return;
		
		const YT = window.YT;
		new YT.Player('farm-video', {
			events: {
				onStateChange: (event) => {
					isVideoPlaying = event.data === YT.PlayerState.PLAYING;
				}
			}
		});
	}
</script>

<!-- Section Fermes -->
<section class="section page-gutter content-margin row-spread">
	<div class="container-wide">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Texte explicatif -->
			<div class="space-y-6">
				<div>
					<span class="text-sm font-semibold uppercase tracking-wider text-primary">
						Notre Mission
					</span>
					<h2 class="section-title mt-2 mb-4">Des Fermes Régénératrices</h2>
				</div>

				<p class="text-lg leading-relaxed text-default">
					Le projet <strong>Living Soils</strong> accompagne un réseau mondial de fermes engagées dans
					la régénération des sols. Chaque ferme partenaire applique des pratiques agroécologiques innovantes
					qui restaurent la biodiversité et la fertilité naturelle des terres.
				</p>

				<div class="space-y-4">
					<div class="flex gap-4">
						<div
							class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-primary"
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
							<h3 class="font-semibold mb-1 text-default">Agriculture Régénératrice</h3>
							<p class="text-light">
								Techniques qui améliorent la santé des sols tout en produisant des aliments de
								qualité
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div
							class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-primary"
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
							<h3 class="font-semibold mb-1 text-default">Biodiversité Restaurée</h3>
							<p class="text-light">
								Réintroduction d'espèces locales et création d'écosystèmes résilients
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div
							class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-primary"
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
							<h3 class="font-semibold mb-1 text-default">Impact Mesurable</h3>
							<p class="text-light">
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
				<div class="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-primary">
					<div class="w-full h-full flex items-center justify-center">
						<iframe
							id="farm-video"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/gnhJVoWJYaw?si=Fj3FeSB1n8wKTcUh&enablejsapi=1"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>

				<!-- Badge décoratif avec animation -->
				<div
					class="farm-badge absolute bg-white rounded-xl shadow-xl p-6 hidden md:block"
					class:playing={isVideoPlaying}
				>
					<div class="text-4xl font-bold text-primary">
						{data.farmCount || 0}
					</div>
					<p class="text-sm font-medium text-light">Fermes actives</p>
				</div>
			</div>
		</div>
	</div>
</section>
