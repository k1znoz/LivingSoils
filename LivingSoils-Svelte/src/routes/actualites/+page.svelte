<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { onMount } from 'svelte';
	import '../../styles/pages/actualites.css';
	import '../../lib/styles/components.css';
	import type { ActualitesData, Post } from '$lib/types';

	export let data: ActualitesData;
	let selectedPost: Post | null = null;

	function openPost(post: Post) {
		selectedPost = post;
		document.body.style.overflow = 'hidden';
	}

	function closePost() {
		selectedPost = null;
		document.body.style.overflow = 'auto';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && selectedPost) {
			closePost();
		}
	}

	function handleCardKeydown(event: KeyboardEvent, post: Post) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openPost(post);
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
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

<Hero
	title="Actualités"
	subtitle="Suivez les dernières nouvelles de LivingSoils et découvrez les initiatives de régénération des sols à travers le monde."
	background="/ressources/hero-fermes.webp"
	align="center"
	size="md"
	primaryHref="#actualites"
	primaryLabel="Découvrir"
	secondaryHref="/soutenir"
	secondaryLabel="Nous rejoindre"
/>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.posts.length === 0}
	<div class="actualites-container">
		<p>Aucune actualité pour le moment.</p>
	</div>
{:else}
	<div class="actualites-container row-spread" id="actualites">
		<div class="page-grid">
			{#each data.posts as post (post._id)}
				<button
					class="card"
					on:click={() => openPost(post)}
					on:keydown={(e) => handleCardKeydown(e, post)}
					type="button"
				>
					{#if post.imageUrl}
						<div class="card-image-wrapper">
							<img src={post.imageUrl} alt={post.imageAlt || post.title} />
						</div>
					{:else}
						<div class="card-image-placeholder">🌱</div>
					{/if}
					<div class="post-content">
						{#if post.publishedAt}
							<time
								>{new Date(post.publishedAt).toLocaleDateString('fr-FR', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}</time
							>
						{/if}
						<h2>{post.title}</h2>
						{#if post.excerpt}
							<p>{post.excerpt}</p>
						{/if}
						<span class="read-more">Lire la suite</span>
					</div>
				</button>
			{/each}
		</div>
	</div>
{/if}

<!-- Modal Article Complet -->
{#if selectedPost}
	<div
		class="article-modal"
		role="dialog"
		aria-modal="true"
		aria-labelledby="article-title"
		tabindex="0"
		on:keydown={(e) => e.key === 'Escape' && closePost()}
	>
		<!-- Accessible backdrop as a real button -->
		<button
			type="button"
			class="article-backdrop"
			aria-label="Fermer l'article"
			on:click={closePost}
		>
		</button>

		<!-- Stop pointer events instead of click to avoid a11y click-on-div warning -->
		<div class="article-modal-content" on:pointerdown|stopPropagation>
			<button class="modal-close" type="button" on:click={closePost} aria-label="Fermer l'article">
				<span>✕</span>
			</button>

			{#if selectedPost.imageUrl}
				<div class="article-hero-image">
					<img src={selectedPost.imageUrl} alt={selectedPost.imageAlt || selectedPost.title} />
				</div>
			{/if}

			<div class="article-content">
				<header class="article-header">
					{#if selectedPost.publishedAt}
						<time class="article-date">
							{new Date(selectedPost.publishedAt).toLocaleDateString('fr-FR', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>
					{/if}
					<h1 id="article-title" class="article-title">{selectedPost.title}</h1>
				</header>

				{#if selectedPost.body}
					<div class="article-body">
						<PortableText
							value={selectedPost.body as import('@portabletext/types').PortableTextBlock[]}
						/>
					</div>
				{:else if selectedPost.excerpt}
					<div class="article-body">
						<p>{selectedPost.excerpt}</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
