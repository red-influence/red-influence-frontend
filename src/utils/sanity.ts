import { createClient } from '@sanity/client';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';

import {
	SanityImageAsset,
	CaseStudy,
	Service,
	About,
	Hero,
	Menu,
	SiteSettings,
	internalGroqTypeReferenceTo,
	Maloum,
	Person,
} from '@/types/sanity.types';

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.SANITY_CLIENT_API_DATASET ?? 'production',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: 'v2024-07-17', // use current date (YYYY-MM-DD) to target the latest API version
	token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export function imageToUrl(source: any) {
	return builder.image(source);
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getSiteSettings() {
	const data = await client.fetch<SiteSettings>(
		'*[_type == "siteSettings"][0]'
	);
	return data;
}

export async function getMenus() {
	const data = await client.fetch<Menu[]>('*[_type == "menu"]');
	return data;
}

export async function getHero() {
	const data = await client.fetch<
		Hero & { case_studies: (CaseStudy & { service: { title: string } })[] }
	>(groq`
		*[_type == "hero"][0]{
		...,
		case_studies[]->{..., service->{title}}
	}`);
	return data;
}

export async function getAbout() {
	const data = await client.fetch<About>('*[_type == "about"][0]');
	return data;
}

export async function getServices() {
	const data = await client.fetch<Service[]>(
		'*[_type == "service"]|order(orderRank)'
	);
	return data;
}

export async function getCaseStudies() {
	const data = await client.fetch<
		(CaseStudy & { service: { title: string } })[]
	>('*[_type == "case-study"]{..., service->{title}}');
	return data;
}

export async function getMaloum() {
	const data = await client.fetch<Maloum>('*[_type == "maloum"][0]');
	return data;
}

export async function getPersons() {
	const data = await client.fetch<Person[]>(
		'*[_type == "person"]|order(orderRank)'
	);
	return data;
}
