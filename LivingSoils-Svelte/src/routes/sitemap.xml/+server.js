export async function GET() {
	const baseUrl = 'https://thelivingsoils.org';
	const pages = [
		{
			url: '',
			lastmod: '2025-12-16',
			priority: '1.0',
			changefreq: 'monthly'
		},
		{
			url: '/fermes',
			lastmod: '2025-12-16',
			priority: '0.9',
			changefreq: 'weekly'
		},
		{
			url: '/actualites',
			lastmod: '2025-12-16',
			priority: '0.9',
			changefreq: 'weekly'
		},
		{
			url: '/partenaires',
			lastmod: '2025-12-16',
			priority: '0.8',
			changefreq: 'monthly'
		},
		{
			url: '/soutenir',
			lastmod: '2025-12-16',
			priority: '0.8',
			changefreq: 'monthly'
		}
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `	<url>
		<loc>${baseUrl}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<priority>${page.priority}</priority>
		<changefreq>${page.changefreq}</changefreq>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
