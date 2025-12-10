<script>
  export let data;
</script>

<h1>Nos posts</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.posts.length === 0}
	<p>Aucun post disponible.</p>
{:else}
	{#each data.posts as post}
		<article>
			<h2>{post.title}</h2>
			{#if post.publishedAt}
				<time>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</time>
			{/if}
			{#if post.imageUrl}
				<img src={post.imageUrl} alt={post.title} />
			{/if}
			{#if post.body}
				<div class="body">
					<!-- Le body est un array de blocks -->
					{JSON.stringify(post.body)}
				</div>
			{/if}
		</article>
	{/each}
{/if}
