import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const supportOptions = await client.fetch(
			`*[_type == "supportOption"] | order(order asc) {
                _id,
                title,
                description,
                link,
                buttonText
            }`
		);

		return {
			supportOptions: supportOptions || []
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des options de soutien:', error);
		return {
			supportOptions: [],
			error: error instanceof Error ? error.message : 'Une erreur est survenue'
		};
	}
}
