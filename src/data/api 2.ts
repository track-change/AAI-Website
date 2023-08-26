import { useSanityClient, groq } from "astro-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";

export async function getArtists(): Promise<Artist[]> {
  const query = groq`*[_type == "artist"]`;
  const artists = await useSanityClient().fetch(query);
  return artists;
}

export async function getArtistBySlug(slug: string): Promise<Artist> {
  return await useSanityClient().fetch(
    groq`*[_type == "artist" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getSiteSettings(): Promise<Settings> {
  const query = groq`*[_type == "settings" && _id == "settings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}

interface Link {
  _type: string;
  url: string;
}

interface Artist {
  _type: string;
  _id: string;
  name: string;
  slug: Slug;
  image: ImageAsset;
  imageCredit: string;
  links: Link[];
  bio: PortableTextBlock[];
}

interface Settings {
  _type: string;
  _id: string;
  title: string;
  description: string;
}
