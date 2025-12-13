<script context="module" lang="ts">
    // Types align with Sanity `farm` document + client projection
    export type Farm = {
        _id: string;
        name: string;
        location: string;
        description?: string;
        imageUrl?: string;
        // Optional fields used by the map component when available
        link?: string;
        coordinates?: { lat: number; lng: number };
    };
</script>

<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import '../styles/MapFarms.css';
    // Leaflet must be loaded client-side only; we'll import dynamically in onMount
    // to avoid SSR errors (window is not defined)

    export let farms: Farm[] = [];

    let mapEl: HTMLDivElement;
    let map: any | undefined; // typed after dynamic import
    let errorMsg = "";

    function validCoord(c) {
        return (
            c &&
            typeof c.lat === "number" && !Number.isNaN(c.lat) &&
            typeof c.lng === "number" && !Number.isNaN(c.lng)
        );
    }

    async function initMap() {
        // Avoid SSR issues and double init
        if (typeof window === "undefined") return;
        if (!mapEl) return;
        if (map) return;

        try {
            // Dynamic import of Leaflet and its CSS on client only
            const LeafletModule = await import("leaflet");
            await import("leaflet/dist/leaflet.css");
            const L = LeafletModule.default;

            map = L.map(mapEl, { scrollWheelZoom: true });

            const coords = farms
                .map((f) => f?.coordinates)
                .filter((c) => validCoord(c));

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "&copy; OpenStreetMap contributors",
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
                if (!validCoord(c)) return;
                const m = L.marker([c.lat, c.lng]).addTo(map);
                const html = `
                    <div style="min-width:180px">
                      <strong>${f.name || "Ferme"}</strong><br/>
                      ${f.location ? `<span>${f.location}</span><br/>` : ""}
                      ${f.link ? `<a href="${f.link}" target="_blank" rel="noopener">Voir la fiche</a>` : ""}
                    </div>
                `;
                m.bindPopup(html);
            });
        } catch (e) {
            errorMsg = "Échec d'initialisation de la carte. Veuillez réessayer.";
            // Optional: console for debugging without breaking UI
            console.error("Map init error", e);
        }
    }

    onMount(() => {
        initMap();
    });

    // Re-init when farms change (if map not yet created)
    $: (farms && !map) && initMap();

    onDestroy(() => {
        try {
            if (map) {
                map.remove();
                map = undefined;
            }
        } catch {}
    });
</script>

<div bind:this={mapEl} class="map-root">
	{#if errorMsg}
		<div class="map-error" role="alert">{errorMsg}</div>
	{/if}
</div>
