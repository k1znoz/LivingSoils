<script>
	import '../../styles/pages/soutenir.css';
	import '../../lib/styles/components.css';
	export let data;
</script>

<h1 class="page-title">Nous Soutenir</h1>

{#if data.error}
	<p class="error">Erreur: {data.error}</p>
{/if}

{#if data.supportOptions.length === 0}
	<div class="page-container">
		<p>Informations à venir.</p>
	</div>
{:else}
	<div class="page-container">
		<div class="options">
			{#each data.supportOptions as option}
				<article class="option card">
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
	</div>
{/if}
