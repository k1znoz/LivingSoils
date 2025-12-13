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

<Hero />
<Ferme {data} />
<Stats {data} />
<Actualite {data} />
<Fondateurs />
<Galerie />
<Partenaires partners={data?.partners} />
