<script>
	import '../styles/components.css';
	import '../styles/galerie.css';
</script>

<!-- Galerie -->
<section class="section page-gutter row-spread gallery-section-bg">
	<div class="container-wide">
		<div class="text-center mb-8">
			<h3 class="text-2xl font-bold section-accent heading-font">Sur le Terrain</h3>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
				<img
					src="/ressources/FemmeFormationFerme.webp"
					alt="Formation des femmes"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 gallery-image"
				/>
				<div class="absolute bottom-0 left-0 right-0 p-4 gallery-card-overlay"></div>
			</div>
			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
				<img
					src="/ressources/FermePoulets.webp"
					alt="Élevage de poulets"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 gallery-image"
				/>
				<div class="absolute bottom-0 left-0 right-0 p-4 gallery-card-overlay"></div>
			</div>

			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
				<img
					src="/ressources/MoucheSoldatNoir.webp"
					alt="Mouche soldat noire"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 gallery-image gallery-image--center"
				/>
				<div class="absolute bottom-0 left-0 right-0 p-4 gallery-card-overlay"></div>
			</div>
		</div>
	</div>
</section>
