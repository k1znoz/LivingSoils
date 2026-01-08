<script>
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Galerie from '$lib/components/Galerie.svelte';
	import Fondateurs from '$lib/components/Fondateurs.svelte';
	import Actualite from '$lib/components/Actualite.svelte';

	import Ferme from '$lib/components/Ferme.svelte';
	import Partenaires from '$lib/components/Partenaires.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>LivingSoils - Régénération des Sols & Agriculture Durable</title>
	<meta
		name="description"
		content="Rejoignez le réseau LivingSoils pour régénérer les sols. Découvrez nos fermes engagées, nos fondateurs passionnés et les dernières actualités sur l'agriculture régénérative."
	/>
	<link rel="canonical" href="https://thelivingsoils.org/" />
	
	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="LivingSoils - Régénération des Sols & Agriculture Durable" />
	<meta
		property="og:description"
		content="Rejoignez le réseau LivingSoils pour régénérer les sols. Découvrez nos fermes engagées, nos fondateurs passionnés et les dernières actualités sur l'agriculture régénérative."
	/>
	<meta property="og:url" content="https://thelivingsoils.org/" />
	<meta property="og:image" content="https://thelivingsoils.org/ressources/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LivingSoils - Régénération des Sols & Agriculture Durable" />
	<meta
		name="twitter:description"
		content="Rejoignez le réseau LivingSoils pour régénérer les sols. Découvrez nos fermes engagées et les actualités sur l'agriculture régénérative."
	/>
	<meta name="twitter:image" content="https://thelivingsoils.org/ressources/og-image.png" />
	
	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "LivingSoils",
			"url": "https://thelivingsoils.org",
			"logo": "https://thelivingsoils.org/ressources/logo.png",
			"description": "Réseau pour la régénération des sols et la promotion de l'agriculture régénérative",
			"sameAs": [
				"https://www.linkedin.com/company/livingsoils"
			],
			"contactPoint": {
				"@type": "ContactPoint",
				"contactType": "Support",
				"url": "https://thelivingsoils.org/soutenir"
			}
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "LivingSoils",
			"url": "https://thelivingsoils.org",
			"description": "Régénération des sols et agriculture durable",
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://thelivingsoils.org/fermes?search={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}
	</script>
	<script src="https://elfsightcdn.com/platform.js" async></script>
</svelte:head>

<Hero />
<Ferme {data} />
<Stats {data} />
<Actualite {data} />
<Fondateurs />
<Galerie />
<Partenaires partners={data?.partners} />
<!-- Elfsight LinkedIn Feed | Untitled LinkedIn Feed -->

<div class="elfsight-app-6c8b9279-1cd9-4bbe-9009-2af1210b43af" data-elfsight-app-lazy></div>
