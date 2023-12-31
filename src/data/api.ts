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
  EducationPage,
  Contact,
  Funder,
  People,
  Person,
  News,
  Opportunities,
  Partnerships,
  Venue,
  VenuePage,
  Home,
  Banner,
  Donate,
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

export async function getArtistByRef(ref: string): Promise<Artist> {
  const query = groq`*[_type == "artist" && _id == $ref][0]`;
  const artist = await useSanityClient().fetch(query, { ref });
  return artist;
}

export async function getPrograms(): Promise<Program[]> {
  return fetchData("program");
}

export async function getProgramBySlug(slug: string): Promise<Program> {
  return fetchData("program", slug);
}

export async function getProgramByRef(ref: string): Promise<Program> {
  const query = groq`*[_type == "program" && _id == $ref][0]`;
  const program = await useSanityClient().fetch(query, { ref });
  return program;
}

export async function getNews(): Promise<News[]> {
  return fetchData("news");
}

export async function getNewsBySlug(slug: string): Promise<News> {
  return fetchData("news", slug);
}

export async function getEducationPage(): Promise<EducationPage> {
  const query = groq`*[_type == "educationPage" && _id == "educationPage"][0]`;
  const educationPage = await useSanityClient().fetch(query);
  return educationPage;
}

export async function getEducations(): Promise<Education[]> {
  return fetchData("education");
}

export async function getEducationBySlug(slug: string): Promise<Education> {
  return fetchData("education", slug);
}

export async function getEducationByRef(ref: string): Promise<Education> {
  const query = groq`*[_type == "education" && _id == $ref][0]`;
  const education = await useSanityClient().fetch(query, { ref });
  return education;
}

export async function getVenuePage(): Promise<VenuePage> {
  const query = groq`*[_type == "venuePage" && _id == "venuePage"][0]`;
  const venue = await useSanityClient().fetch(query);
  return venue;
}

export async function getVenue(): Promise<Venue[]> {
  return fetchData("venue");
}




export async function getVenueBySlug(slug: string): Promise<Venue> {
  return fetchData("venue", slug);
}

export async function getHome(): Promise<Home> {
  const query = groq`*[_type == "home" && _id == "home"][0]`;
  const home = await useSanityClient().fetch(query);
  return home;
}

export async function getDonate(): Promise<Donate> {
  const query = groq`*[_type == "donate" && _id == "donate"][0]`;
  const donate = await useSanityClient().fetch(query);
  return donate;
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

export async function getContactUs(): Promise<Contact> {
  const query = groq`*[_type == "contactUs" && _id == "contactUs"][0]`;
  const contact = await useSanityClient().fetch(query);
  return contact
}

export async function getFunder(): Promise<Funder> {
  const query = groq`*[_type == "support" && _id == "support"][0]`;
  const funder = await useSanityClient().fetch(query);
  return funder
}

export async function getPeople(): Promise<People> {
  const query = groq`*[_type == "people" && _id == "people"][0]`;
  const people = await useSanityClient().fetch(query);
  return people
}

export async function getOpportunities(): Promise<Opportunities> {
  const query = groq`*[_type == "opportunities" && _id == "opportunities"][0]`;
  const opportunities = await useSanityClient().fetch(query);
  return opportunities
}

export async function getPartnerships(): Promise<Partnerships> {
  const query = groq`*[_type == "partnerships" && _id == "partnerships"][0]`;
  const partnerships = await useSanityClient().fetch(query);
  return partnerships
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

export async function getPersonByRef(ref: string): Promise<Person> {
  const query = groq`*[_type == "person" && _id == $ref][0]`;
  const people = await useSanityClient().fetch(query, { ref });
  return people;
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

export async function getMediaByRef(ref: string): Promise<Media> {
  const query = groq`*[_type == "media" && _id == $ref][0]`;
  const media = await useSanityClient().fetch(query, { ref });
  return media;
}

export async function getTickets(): Promise<Ticket[]> {
  const query = groq`*[_type == "ticket"]`;
  const tickets = await useSanityClient().fetch(query);
  return tickets;
}

export async function getTicketsByRef(ref: string): Promise<Ticket> {
  const query = groq`*[_type == "ticket" && _id == $ref][0]`;
  const ticket = await useSanityClient().fetch(query, { ref });
  return ticket;
}

export async function getBannerByRef(ref: string): Promise<Banner> {
  const query = groq`*[_type == "banner" && _id == $ref][0]`;
  const banner = await useSanityClient().fetch(query, { ref });
  return banner;
}
