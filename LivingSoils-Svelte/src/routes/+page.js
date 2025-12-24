import { client } from '$lib/sanityClient';
import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

/**
 * @param {any} source
 * @returns {string | null}
 */
function urlFor(source) {
	if (!source) return null;
	return builder.image(source).url();
}

/**
 * @typedef {Object} Farm
 * @property {string} _id
 */

/**
 * @typedef {Object} Post
 * @property {string} _id
 * @property {string} title
 * @property {{ current: string }} slug
 * @property {string} publishedAt
 * @property {string} [excerpt]
 * @property {string | null} mainImage
 */

/**
 * @typedef {Object} Partner
 * @property {string} _id
 * @property {string} name
 * @property {string} [website]
 * @property {string | null} logoUrl
 */

/**
 * @returns {Promise<{ farmCount: number, posts: Post[], partners: Partner[] }>}
 */
export async function load() {
	try {
		const farms = await client.fetch(`*[_type == "farm"]`);
		const posts = await client.fetch(`
            *[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                slug,
                publishedAt,
                excerpt,
                mainImage {
                    asset->{
                        _id,
                        url
                    }
                }
            }
        `);

		// Fetch a subset of partners for homepage
		const partners = await client.fetch(`
		  *[_type == "partner"] | order(name asc)[0...8] {
		    _id,
		    name,
		    website,
		    logo
		  }
		`);

		const postsWithImages = posts.map((/** @type {any} */ post) => {
			const imageUrl = post.mainImage ? urlFor(post.mainImage) : null;
			return {
				...post,
				imageUrl: imageUrl
			};
		});

		const partnersWithLogos = partners.map((/** @type {any} */ p) => ({
			...p,
			logoUrl: p.logo ? urlFor(p.logo) : null
		}));

		return {
			farmCount: farms.length,
			posts: postsWithImages || [],
			partners: partnersWithLogos || []
		};
	} catch (error) {
		console.error('Error loading data:', error);
		return {
			farmCount: 0,
			posts: [],
			partners: []
		};
	}
}
