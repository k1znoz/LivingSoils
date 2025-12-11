<script>
	import '../styles/components.css';
</script>

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
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
				<img
					src="/ressources/FemmeFormationFerme.webp"
					alt="Formation des femmes"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					style="display: block;"
				/>
				<div
					class="absolute bottom-0 left-0 right-0 p-4"
					style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);"
				></div>
			</div>
			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
				<img
					src="/ressources/FermePoulets.webp"
					alt="Élevage de poulets"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					style="display: block;"
				/>
				<div
					class="absolute bottom-0 left-0 right-0 p-4"
					style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);"
				></div>
			</div>

			<div class="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
				<img
					src="/ressources/MoucheSoldatNoir.webp"
					alt="Mouche soldat noire"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					style="display: block; object-position: center;"
				/>
				<div
					class="absolute bottom-0 left-0 right-0 p-4"
					style="background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);"
				></div>
			</div>
		</div>
	</div>
</section>
