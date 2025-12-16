<script>
	import '../../styles/pages/actualites.css';
	import '../../lib/styles/components.css';

	export let data;
</script>

<svelte:head>
	<title>Actualités - LivingSoils | Agriculture Régénérative & Sols Vivants</title>
	<meta
		name="description"
		content="Découvrez les dernières actualités de LivingSoils : innovations en agriculture régénérative, témoignages de fermes, événements et avancées dans la régénération des sols."
	/>
	<meta
		property="og:title"
		content="Actualités - LivingSoils | Agriculture Régénérative & Sols Vivants"
	/>
	<meta
		property="og:description"
		content="Découvrez les dernières actualités de LivingSoils : innovations en agriculture régénérative, témoignages de fermes et événements."
	/>
	<meta property="og:url" content="https://thelivingsoils.org/actualites" />
	<meta name="twitter:title" content="Actualités - LivingSoils" />
	<meta
		name="twitter:description"
		content="Découvrez les dernières actualités de LivingSoils : innovations en agriculture régénérative et témoignages de fermes."
	/>
</svelte:head>

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
