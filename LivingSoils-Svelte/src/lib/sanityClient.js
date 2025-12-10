import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 's6dvzr56',
	dataset: 'production',
	apiVersion: '2024-12-10',
	useCdn: true
});
