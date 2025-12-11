<script>
	import '../styles/components.css';
	let { data } = $props();
</script>

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
							style="background: linear-gradient(135deg, #6d4c41, #8b5a3c); opacity: 0.95;"
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
