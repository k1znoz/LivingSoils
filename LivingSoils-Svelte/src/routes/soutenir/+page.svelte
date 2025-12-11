<script>
	export let data;
</script>

<h1>Nous Soutenir</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.supportOptions.length === 0}
	<p>Informations à venir.</p>
{:else}
	<div class="support-options">
		{#each data.supportOptions as option}
			<article class="support-card">
				<h2>{option.title}</h2>
				{#if option.description}
					<p>{option.description}</p>
				{/if}
				{#if option.link}
					<a href={option.link} class="cta-button">
						{option.buttonText || 'En savoir plus'}
					</a>
				{/if}
			</article>
		{/each}
	</div>
{/if}

<style>
	.support-options {
		display: grid;
		gap: 2rem;
		margin-top: 2rem;
	}

	.support-card {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 2rem;
	}

	.cta-button {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.75rem 1.5rem;
		background: #2563eb;
		color: white;
		text-decoration: none;
		border-radius: 4px;
	}

	.cta-button:hover {
		background: #1d4ed8;
	}
</style>
