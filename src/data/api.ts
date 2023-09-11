import { useSanityClient } from "@sanity/astro";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug, File } from "@sanity/types";
import groq from "groq";

async function fetchData(type: string, slug?: string) {
  const query = slug
    ? groq`*[_type == $type && slug.current == $slug][0]`
    : groq`*[_type == $type]`;

  const params = slug ? { type, slug } : { type };

  return await useSanityClient().fetch(query, params);
}

export async function getArtists(): Promise<Artist[]> {
  return fetchData("artist");
}

export async function getArtistBySlug(slug: string): Promise<Artist> {
  return fetchData("artist", slug);
}

export async function getPrograms(): Promise<Program[]> {
  return fetchData("program");
}

export async function getProgramBySlug(slug: string): Promise<Program> {
  return fetchData("program", slug);
}

export async function getEducations(): Promise<Education[]> {
  return fetchData("education");
}

export async function getEducationBySlug(slug: string): Promise<Education> {
  return fetchData("education", slug);
}

export async function getSiteSettings(): Promise<Settings> {
  const query = groq`*[_type == "settings" && _id == "settings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}

export interface Entry {
  _type: string;
  _key: string;
  displayTitle: string;
  value: string;
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

interface Program {
  _type: string;
  _id: string;
  name: string;
  slug: Slug;
  type: string;
  startDateTime: string;
  endDateTime: string;
  coverImage: ImageAsset;
  pressKit: File;
  curator: string;
  artists: Artist[];
  description: PortableTextBlock[];
  images: ImageAsset[];
  tags: string[];
  season: string;
}

interface Tag {
  _type: string;
  _id: string;
  tag: string;
}

export interface Education {
  _type: string;
  _id: string;
  title: string;
  slug: Slug;
  coverImage: ImageAsset;
  cta: Array<Entry>;
  frontCaptions: Array<Entry>;
  body: PortableTextBlock[];
  tags: Tag[];
}

export interface Settings {
  _type: string;
  _id: string;
  title: string;
  description: string;
}
