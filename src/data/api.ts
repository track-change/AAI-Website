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

export async function getVisit(): Promise<Visit> {
  const query = groq`*[_type == "visit" && _id == "visit"][0]`;
  const visit = await useSanityClient().fetch(query);
  return visit;
}

export async function getFileLink(fileRef: string): Promise<string | null> {
  try {
    const file = await useSanityClient().getDocument(fileRef);
    if (file?.url) {
      return file.url;
    } else {
      console.error("File not found in Sanity");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving file from Sanity", error);
    return null;
  }
}

export async function getFormByRef(ref: string): Promise<Form> {
  const query = groq`*[_type == "form" && _id == $ref][0]`;
  const form = await useSanityClient().fetch(query, { ref });
  return form;
}

export async function getTagByRef(ref: string): Promise<Tag> {
  const query = groq`*[_type == "tag" && _id == $ref][0]`;
  const tag = await useSanityClient().fetch(query, { ref });
  return tag;
}

export interface Entry {
  _type: string;
  _key: string;
  displayTitle: string;
  value: string;
  chooseFile?: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
}

export interface FormFields {
  _type: string;
  _key: string;
  displayTitle: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: { displayTitle: string; value: string }[];
  submitTo: string;
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
  // links: Array<Entry>;
  bio: PortableTextBlock[];
  frontCaptions: Array<Entry>;
}
export interface Program {
  _type: string;
  _id: string;
  name: string;
  slug: Slug;
  type: string;
  eventTypes: string[];
  startDateTime: string;
  endDateTime: string;
  coverImage: ImageAsset;
  pressKit: File;
  curator: string;
  artists: Artist[];
  description: PortableTextBlock[];
  images: ImageAsset[];
  tags: {
    _ref: string;
  }[];
  season: string;
  cta: Array<Entry>;
  frontCaptions: Array<Entry>;
}
export interface Tag {
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

interface Visit {
  _type: string;
  _id: string;
  address: string;
  phone: string;
  ctafields: {
    displayTitle: string;
    cta?: {
      value: string;
      url: string;
    };
    embed?: {
      url: string;
    };
    body?: PortableTextBlock[];
  }[];
  forms: Form[];
}

interface Form {
  _type: string;
  _id: string;
  _ref: string;
  title: string;
  description: PortableTextBlock[];
  subheading: string;
  fields: Array<FormFields>;
  submitTo: string;
}

export interface Settings {
  _type: string;
  _id: string;
  title: string;
  description: string;
}
