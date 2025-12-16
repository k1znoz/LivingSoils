import { client } from '$lib/sanityClient';

/**
 * @typedef {Object} Post
 * @property {string} _id
 * @property {string} title
 * @property {{ current: string }} slug
 * @property {string} [excerpt]
 * @property {string} publishedAt
 * @property {Array<any>} [body] - Portable Text content
 * @property {string} [imageUrl]
 * @property {string} [imageAlt]
 */

/**
 * @returns {Promise<{ posts: Post[], error?: string }>}
 */
export async function load() {
	try {
		const posts = await client.fetch(
			`*[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                slug,
                excerpt,
                publishedAt,
                body,
                "imageUrl": coalesce(mainImage.asset->url, image.asset->url),
                "imageAlt": coalesce(mainImage.alt, image.alt, title)
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
