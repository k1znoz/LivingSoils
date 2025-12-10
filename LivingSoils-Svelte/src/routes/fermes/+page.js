import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const farms = await client.fetch(
			`*[_type == "farm"] | order(name asc) {
                _id,
                name,
                location,
                description,
                "imageUrl": image.asset->url
            }`
		);

		return {
			farms: farms || []
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des fermes:', error);
		return {
			farms: [],
			error: error instanceof Error ? error.message : 'Une erreur est survenue'
		};
	}
}
