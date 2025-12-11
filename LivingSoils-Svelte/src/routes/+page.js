import { client } from '$lib/sanityClient';
import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

function urlFor(source) {
	if (!source) return null;
	return builder.image(source).width(800).height(600).url();
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

		const postsWithImages = posts.map((post) => {
			const imageUrl = post.mainImage ? urlFor(post.mainImage) : null;
			return {
				...post,
				mainImage: imageUrl
			};
		});

		return {
			farmCount: farms.length,
			posts: postsWithImages || []
		};
	} catch (error) {
		console.error('Error loading data:', error);
		return {
			farmCount: 0,
			posts: []
		};
	}
}
