// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Types pour l'API YouTube IFrame
	interface Window {
		YT?: {
			Player: new (
				elementId: string,
				config: {
					events?: {
						onStateChange?: (event: { data: number }) => void;
					};
				}
			) => void;
			PlayerState: {
				PLAYING: 1;
			};
		};
		onYouTubeIframeAPIReady?: () => void;
	}
}

export {};
