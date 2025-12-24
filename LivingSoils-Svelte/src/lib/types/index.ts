// Types communs réutilisables dans les composants

export type MenuItem = {
	label: string;
	href: string;
};

export type HeroProps = {
	title: string;
	subtitle: string;
	background: string;
	overlay: boolean;
	overlayOpacity: number;
	overlayGradient: string;
	align: 'left' | 'center' | 'right';
	size: 'sm' | 'md' | 'lg';
	textColor: string;
	primaryHref: string;
	primaryLabel: string;
	primaryVariant: 'white' | 'outline';
	secondaryHref: string;
	secondaryLabel: string;
	secondaryVariant: 'white' | 'outline';
	showSecondary: boolean;
};

export type Farm = {
	_id: string;
	name: string;
	location: string;
	description?: string;
	imageUrl?: string;
	link?: string;
	coordinates?: { lat: number; lng: number };
};

export type Partner = {
	_id: string;
	name: string;
	website?: string | null;
	logoUrl?: string | null;
};

export type SupportOption = {
	title: string;
	description?: string;
	link?: string;
	buttonText?: string;
};

export type Post = {
	_id: string;
	title: string;
	slug: { current: string };
	excerpt?: string;
	publishedAt: string;
	body?: unknown[];
	imageUrl?: string;
	imageAlt?: string;
};

export type HomepageData = {
	farmCount: number;
};

export type ActualitesData = {
	posts: Post[];
	error?: string;
};

export type PartenairesData = {
	partners: Partner[];
	error?: string;
};

export type SoutenirData = {
	supportOptions: SupportOption[];
	error?: string;
};
