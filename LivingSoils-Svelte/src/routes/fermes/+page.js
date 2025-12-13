import { client } from '$lib/sanityClient';

export async function load() {
	try {
		const farms = await client.fetch(
			`*[_type == "farm"] | order(name asc) {
                _id,
                name,
                location,
                description,
                "imageUrl": image.asset->url,
                coordinates
            }`
		);

		// Convertit les formats DMS (ex: 5°12'36.4"N) en décimal si nécessaire
		function dmsToDecimal(input) {
			if (typeof input === 'number') return input;
			if (typeof input !== 'string') return undefined;
			const s = input.trim().toUpperCase();
			// Match: 12°34'56.7"N ou 12 34 56.7 N
			const re =
				/([+-]?\d+(?:\.\d+)?)\s*(?:°|\s)\s*(\d+(?:\.\d+)?)?\s*(?:'|\s)?\s*(\d+(?:\.\d+)?)?\s*(?:"|\s)?\s*([NSEW])?/;
			const m = s.match(re);
			if (!m) return undefined;
			const deg = parseFloat(m[1] || '0');
			const min = parseFloat(m[2] || '0');
			const sec = parseFloat(m[3] || '0');
			let val = Math.abs(deg) + min / 60 + sec / 3600;
			const dir = m[4];
			// Appliquer le signe pour S ou W
			if (dir === 'S' || dir === 'W') val = -val;
			// Si deg indique déjà un signe, respecter
			if (deg < 0) val = -val;
			return val;
		}

		const normalized = (farms || []).map((f) => {
			const c = f.coordinates;
			if (!c) return f;
			let { lat, lng } = c;
			const nlat = dmsToDecimal(lat);
			const nlng = dmsToDecimal(lng);
			return {
				...f,
				coordinates:
					typeof nlat === 'number' && typeof nlng === 'number' ? { lat: nlat, lng: nlng } : c
			};
		});

		return {
			farms: normalized
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des fermes:', error);
		return {
			farms: [],
			error: error instanceof Error ? error.message : 'Une erreur est survenue'
		};
	}
}
