import { client } from '$lib/sanityClient';
import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

function urlFor(source = String) {
	if (!source) return null;
	return builder.image(source).url();
}

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

		const postsWithImages = posts.map((post) => {
			const imageUrl = post.mainImage ? urlFor(post.mainImage) : null;
			return {
				...post,
				mainImage: imageUrl
			};
		});

		const partnersWithLogos = partners.map((p : Partner) => ({
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
