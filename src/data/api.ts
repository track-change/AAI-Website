import { useSanityClient } from "@sanity/astro";
import type {
  Artist,
  Education,
  Form,
  Media,
  Program,
  Settings,
  Tag,
  Ticket,
  Visit,
  About,
} from "./types";

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

export async function getAboutSec(): Promise<About> {
  const query = groq`*[_type == "about" && _id == "about"][0]`;
  const about = await useSanityClient().fetch(query);
  return about;
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

export async function getProgramByRef(ref: string): Promise<Program> {
  const query = groq`*[_type == "program" && _id == $ref][0]`;
  const program = await useSanityClient().fetch(query, {ref});
  return program;
}

export async function getTagByRef(ref: string): Promise<Tag> {
  const query = groq`*[_type == "tag" && _id == $ref][0]`;
  const tag = await useSanityClient().fetch(query, { ref });
  return tag;
}

export async function getMedia(): Promise<Media[]> {
  const query = groq`*[_type == "media"]`;
  const media = await useSanityClient().fetch(query);
  return media;
}

export async function getMediaBySlug(slug: string): Promise<Media> {
  const query = groq`*[_type == "media" && slug.current == $slug][0]`;
  const media = await useSanityClient().fetch(query, { slug });
  return media;
}

export async function getTickets(): Promise<Ticket[]> {
  const query = groq`*[_type == "ticket"]`;
  const tickets = await useSanityClient().fetch(query);
  return tickets;
}