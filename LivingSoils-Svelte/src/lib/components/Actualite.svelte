<script>
	import '../styles/components.css';
	import '../styles/actualiteComponent.css';
	let { data } = $props();
</script>

<section class="section page-gutter content-margin row-spread">
	<div class="container-wide">
		<h2 class="section-title text-center mb-4">Nos Dernières Actualités</h2>
		<p class="section-subtitle text-center mx-auto mb-12">
			Suivez les dernières nouvelles de notre réseau mondial et nos actions pour la régénération des
			sols
		</p>

		<div class="actualites-grid">
			{#if data.posts && data.posts.length > 0}
				{#each data.posts.slice(0, 4) as post (post._id)}
					<a href="/actualites/{post.slug.current}" class="actualite-card">
						<div class="actualite-card__image-container">
							{#if post.mainImage}
								<img src={post.mainImage} alt={post.title} class="actualite-card__image" />
							{:else}
								<div class="actualite-card__image actualite-card__image--fallback"></div>
							{/if}
							<div class="actualite-card__overlay"></div>
						</div>
						<div class="actualite-card__content">
							<time class="actualite-card__date">
								{new Date(post.publishedAt).toLocaleDateString('fr-FR', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</time>
							<h3 class="actualite-card__title">{post.title}</h3>
							<p class="actualite-card__excerpt">
								{post.excerpt || 'Découvrez cette actualité...'}
							</p>
							<span class="actualite-card__link">
								Lire la suite
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 3L11 8L6 13"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</div>
					</a>
				{/each}
			{:else}
				<div class="actualites-empty">
					<p>Aucune actualité pour le moment</p>
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
