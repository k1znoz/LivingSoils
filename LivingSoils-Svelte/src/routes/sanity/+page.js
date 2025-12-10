import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const posts = await client.fetch(
			`*[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                slug,
                publishedAt,
                "imageUrl": image.asset->url,
                body
            }`
		);

		return {
			posts: posts || []
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des posts:', error);
		return {
			posts: [],
			error: error instanceof Error ? error.message : 'Une erreur est survenue'
		};
	}
}
