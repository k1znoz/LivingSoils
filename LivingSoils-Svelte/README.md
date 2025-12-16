# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

---

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# LivingSoils - SvelteKit + Sanity

Application web complète avec frontend SvelteKit et Sanity Studio CMS.

## Structure

- `/LivingSoils-Svelte` - Application SvelteKit frontend
- `/studio-livingsoils` - Sanity Studio CMS

## Installation

```bash
# Frontend
cd LivingSoils-Svelte
npm install
npm run dev

# Studio Sanity
cd studio-livingsoils
npm install
npm run dev
```

## Configuration Sanity

- Project ID: `s6dvzr56`
- Dataset: `production` (public)

## SEO & Référencement

### Métadonnées optimisées

Toutes les pages incluent des métadonnées SEO complètes :

- **Titres uniques** par page pour un meilleur classement Google
  - Page d'accueil : `src/routes/+page.svelte` (ligne 14)
  - Actualités : `src/routes/actualites/+page.svelte` (ligne 8)
  - Fermes : `src/routes/fermes/+page.svelte` (ligne 11)
  - Partenaires : `src/routes/partenaires/+page.svelte` (ligne 8)
  - Soutenir : `src/routes/soutenir/+page.svelte` (ligne 8)

- **Meta descriptions** optimisées avec mots-clés pertinents
  - Configuration globale : `src/routes/+layout.svelte` (lignes 14-17)
  - Descriptions spécifiques dans chaque page (lignes 15-18)

- **Open Graph** pour le partage sur Facebook/LinkedIn
  - Configuration globale : `src/routes/+layout.svelte` (lignes 24-31)
  - URLs canoniques dans chaque page (ligne 23-25)

- **Twitter Cards** pour les partages sur Twitter/X
  - Configuration globale : `src/routes/+layout.svelte` (lignes 33-39)

- **URLs canoniques** pointant vers `https://thelivingsoils.org`
  - Domaine configuré dans toutes les pages avec `property="og:url"`

**Mots-clés ciblés** : `src/routes/+layout.svelte` (lignes 18-21)  
régénération des sols, agriculture durable, agriculture régénérative, sols vivants, agroécologie, fermes écologiques.

### Sitemap.xml

Un sitemap XML automatique est disponible à `/sitemap.xml` :

- **Fichier** : `src/routes/sitemap.xml/+server.js`
- **Domaine** : ligne 2
- **Pages listées** : lignes 3-27
- **Priorités & fréquences** : lignes 6-8 (accueil), 10-14 (fermes), etc.
- Génère automatiquement la liste de toutes les pages
- Cache activé (1h) pour optimiser les performances (ligne 51)
- Compatible avec Google Search Console, Bing, etc.

**Test local** : `http://localhost:5173/sitemap.xml`  
**En production** : `https://thelivingsoils.org/sitemap.xml`

### Configuration du domaine

**Domaine** : `https://thelivingsoils.org/`

Pour la mise en ligne :

1. Déployer le site sur Vercel/Netlify
2. Configurer les DNS WordPress pour pointer vers l'hébergement
3. Vérifier le domaine dans Google Search Console
4. Soumettre le sitemap : `https://thelivingsoils.org/sitemap.xml`

### Robots.txt

Le fichier `robots.txt` est configuré dans `static/robots.txt` :

- **User-agent** : ligne 2
- **Autorisations** : ligne 3
- **Restrictions** : ligne 4
- **Référence sitemap** : ligne 7
- Autorise l'indexation de toutes les pages
- Bloque `/admin/` (si nécessaire)
