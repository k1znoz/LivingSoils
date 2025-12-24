<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import '../styles/MapFarms.css';
	import type { Farm } from '$lib/types';
	// Leaflet must be loaded client-side only; we'll import dynamically in onMount
	// to avoid SSR errors (window is not defined)

	export let farms: Farm[] = [];

	let mapEl: HTMLDivElement;
	let map: import('leaflet').Map | undefined; // typed after dynamic import
	let errorMsg = '';

	function validCoord(
		c: { lat: number; lng: number } | undefined | null
	): c is { lat: number; lng: number } {
		return (
			c !== undefined &&
			c !== null &&
			typeof c.lat === 'number' &&
			!Number.isNaN(c.lat) &&
			typeof c.lng === 'number' &&
			!Number.isNaN(c.lng)
		);
	}

	async function initMap() {
		// Avoid SSR issues and double init
		if (typeof window === 'undefined') return;
		if (!mapEl) return;
		if (map) return;

		try {
			// Dynamic import of Leaflet and its CSS on client only
			const LeafletModule = await import('leaflet');
			await import('leaflet/dist/leaflet.css');
			const L = LeafletModule.default;

			map = L.map(mapEl, { scrollWheelZoom: true });

			const coords = farms.map((f) => f?.coordinates).filter((c) => validCoord(c));

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution: '&copy; OpenStreetMap contributors'
			}).addTo(map);

			if (coords.length) {
				const markers = coords.map((c) => L.marker([c.lat, c.lng]));
				const group = L.featureGroup(markers).addTo(map);
				map.fitBounds(group.getBounds(), { padding: [20, 20] });
			} else {
				map.setView([46.8, 2.2], 6); // centre France par défaut
			}

			// Ajouter les marqueurs avec popups
			farms.forEach((f) => {
				const c = f?.coordinates;
				if (!validCoord(c) || !map) return;
				const m = L.marker([c.lat, c.lng]).addTo(map);
				const html = `
                    <div style="min-width:180px">
                      <strong>${f.name || 'Ferme'}</strong><br/>
                      ${f.location ? `<span>${f.location}</span><br/>` : ''}
                      ${f.link ? `<a href="${f.link}" target="_blank" rel="noopener">Voir la fiche</a>` : ''}
                    </div>
                `;
				m.bindPopup(html);
			});
		} catch (e) {
			errorMsg = "Échec d'initialisation de la carte. Veuillez réessayer.";
			// Optional: console for debugging without breaking UI
			console.error('Map init error', e);
		}
	}

	onMount(() => {
		initMap();
	});

	// Map initialized on mount. If farms change later, markers will display on existing map.

	onDestroy(() => {
			if (map) {
				map.remove();
				map = undefined;
			}
		});
</script>

<div bind:this={mapEl} class="map-root">
	{#if errorMsg}
		<div class="map-error" role="alert">{errorMsg}</div>
	{/if}
</div>
