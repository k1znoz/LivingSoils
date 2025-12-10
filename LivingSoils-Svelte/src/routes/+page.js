import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const farmCount = await client.fetch(`count(*[_type == "farm"])`);

		return {
			farmCount
		};
	} catch (error) {
		console.error('Erreur:', error);
		return {
			farmCount: 0
		};
	}
}
