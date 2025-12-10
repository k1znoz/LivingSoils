<script>
  export let data;
</script>

<h1>Réseau Global</h1>

<section class="intro">
	<p>Bienvenue sur le réseau mondial de LivingSoils</p>
</section>

<nav class="pages-preview">
	<a href="/fermes" class="card">
		<h2>Nos Fermes</h2>
		<p>Découvrez nos {data.farmCount || 0} fermes partenaires</p>
	</a>

	<a href="/partenaires" class="card">
		<h2>Partenaires</h2>
		<p>Nos collaborateurs et soutiens</p>
	</a>

	<a href="/soutenir" class="card">
		<h2>Nous Soutenir</h2>
		<p>Rejoignez notre mouvement</p>
	</a>

	<a href="/actualites" class="card">
		<h2>Actualités</h2>
		<p>Les dernières nouvelles</p>
	</a>
</nav>

<style>
  .pages-preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .card {
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
</style>
