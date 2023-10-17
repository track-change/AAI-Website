import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug, File } from "@sanity/types";

export interface Entry {
  _type: string;
  _key: string;
  displayTitle: string;
  value: string;
  url: string;
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

export interface Link {
  _type: string;
  url: string;
}

export interface Artist {
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
  _ref: string;
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

export interface Venue {
  _type: string;
  _id: string;
  name: string;
  slug: Slug;
  coverImage: ImageAsset;
  cta: Array<Entry>;
  frontCaptions: Array<Entry>;
  description: PortableTextBlock[];
  tags: Tag[];
}

export interface Media {
  _type: string;
  _id: string;
  title: string;
  slug: Slug;
  thumbnail: ImageAsset;
  frontCaptions: Array<Entry>;
  mediaType: string;
  media: string;
  date: number;
  description: PortableTextBlock[];
  tags: Tag[];
}

export interface Visit {
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

export interface Form {
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

export interface Ticket {
  _type: string;
  _id: string;
  title: string;
  program: {
    _ref: string;
  };
  eventType: {
    _ref: string;
  };
  price: string;
  getTicket: string;
}

export interface About {
  _type: string;
  _id: string;
  title: string;
  content: Array<{
    _key: string;
    _type: string;
    value?: string;
    asset?: ImageAsset;
    alt?: string;
    caption?: string;
  }>;
}

export interface Home{
  _type: string;
  _id: string;
  programs: {
    _ref: string;
  }[];
  aboutUs: {
    _key: string;
    _type: string;
    value: string;
  }[];
  content: PortableTextBlock[];
  education: {
    _ref: string;
  }[];
  mediaLibrary: {
    _ref: string;
  }[];
  tickets: {
    _ref: string;
  }[];
  banners: {
    _ref: string;
  }[];

}