import { createClient } from '@sanity/client';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: 'v2024-07-17', // use current date (YYYY-MM-DD) to target the latest API version
	token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getSiteSettings() {
	const data = await client.fetch<any>('*[_type == "siteSettings"][0]');
	return data;
}
