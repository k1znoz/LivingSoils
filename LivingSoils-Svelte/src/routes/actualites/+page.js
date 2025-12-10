import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const posts = await client.fetch(
			`*[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                excerpt,
                publishedAt,
                "imageUrl": image.asset->url
            }`
		);

		return {
			posts: posts || []
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des actualités:', error);
		return {
			posts: [],
			error: error instanceof Error ? error.message : 'Une erreur est survenue'
		};
	}
}
