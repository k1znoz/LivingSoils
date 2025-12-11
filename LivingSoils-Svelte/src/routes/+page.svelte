<script>
	import Hero from '$lib/components/hero.svelte';
	import Stats from '$lib/components/stats.svelte';
	import Galerie from '$lib/components/galerie.svelte';
	import Fondateurs from '$lib/components/fondateurs.svelte';
	import Actualite from '$lib/components/actualite.svelte';
	
	import Ferme from '$lib/components/ferme.svelte';
	import Partenaires from '$lib/components/partenaires.svelte';
	let { data } = $props();
</script>

<Hero />
<Ferme {data} />
<Stats {data} />
<Actualite {data} />
<Fondateurs />
<Galerie />
<Partenaires />
