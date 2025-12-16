<script>
	import '../../styles/pages/actualites.css';
	import '../../lib/styles/components.css';

	export let data;
</script>

<h1 class="page-title">Actualités</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.posts.length === 0}
	<div class="page-container">
		<p>Aucune actualité pour le moment.</p>
	</div>
{:else}
	<div class="page-container">
		<div class="page-grid">
			{#each data.posts as post (post._id)}
				<article class="card">
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
	</div>
{/if}
