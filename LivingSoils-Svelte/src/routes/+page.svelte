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
	<meta property="og:title" content="LivingSoils - Régénération des Sols & Agriculture Durable" />
	<meta
		property="og:description"
		content="Rejoignez le réseau LivingSoils pour régénérer les sols. Découvrez nos fermes engagées, nos fondateurs passionnés et les dernières actualités sur l'agriculture régénérative."
	/>
	<meta property="og:url" content="https://thelivingsoils.org/" />
	<meta name="twitter:title" content="LivingSoils - Régénération des Sols & Agriculture Durable" />
	<meta
		name="twitter:description"
		content="Rejoignez le réseau LivingSoils pour régénérer les sols. Découvrez nos fermes engagées et les actualités sur l'agriculture régénérative."
	/>
</svelte:head>

<Hero />
<Ferme {data} />
<Stats {data} />
<Actualite {data} />
<Fondateurs />
<Galerie />
<Partenaires partners={data?.partners} />
