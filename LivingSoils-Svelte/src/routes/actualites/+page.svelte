<script>
	export let data;
</script>

<h1>Actualités</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.posts.length === 0}
	<p>Aucune actualité pour le moment.</p>
{:else}
	<div class="posts-list">
		{#each data.posts as post (post._id)}
			<article class="post-card">
				{#if post.imageUrl}
					<img src={post.imageUrl} alt={post.title} />
				{/if}
				<div class="post-content">
					<h2>{post.title}</h2>
					{#if post.publishedAt}
						<time>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</time>
					{/if}
					{#if post.excerpt}
						<p>{post.excerpt}</p>
					{/if}
				</div>
			</article>
		{/each}
	</div>
{/if}

<style>
	.posts-list {
		display: grid;
		gap: 2rem;
		margin-top: 2rem;
	}

	.post-card {
		display: grid;
		grid-template-columns: 250px 1fr;
		gap: 2rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
	}

	.post-card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.post-content {
		padding: 1.5rem;
	}

	.post-content time {
		color: #666;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.post-card {
			grid-template-columns: 1fr;
		}
	}
</style>
