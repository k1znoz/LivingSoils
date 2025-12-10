import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const partners = await client.fetch(
			`*[_type == "partner"] | order(name asc) {
                _id,
                name,
                description,
                website,
                "logoUrl": logo.asset->url
            }`
		);

		return {
			partners: partners || []
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des partenaires:', error);
		return {
			partners: [],
			error: error instanceof Error ? error.message : 'Une erreur est survenue'
		};
	}
}
