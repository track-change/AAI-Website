import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug, File } from "@sanity/types";

export interface Entry {
  _type: string;
  _key: string;
  displayTitle: string;
  coverImage: ImageAsset;
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
  image: {
    asset: ImageAsset;
    alt: string;
    _type: string;
  };
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
  images: Array<ImageAsset>;
  relatedPrograms: {
    _ref: string;
    _type: string;
    _key: string;
  }[];
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

export interface News {
  _type: string;
  _id: string;
  title: string;
  slug: Slug;
  coverImage: {
    asset: ImageAsset;
    alt: string;
    _type: string;
  };
  publishedAt: string;
  body: PortableTextBlock[];
  tags: {
    _ref: string;
  }[];
}

export interface Education {
  _type: string;
  _id: string;
  title: string;
  order: string;
  slug: Slug;
  coverImage: ImageAsset;
  images: Array<ImageAsset>;
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
  matterport: string;
}

export interface VenuePage {
  _type: string;
  _id: string;
  title: string;
  content: Array<{
    _key: string;
    _type: string;
    value?: PortableTextBlock[];
    asset?: ImageAsset;
    alt?: string;
    caption?: string;
  }>;
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
  startDateTime: string;
  endDateTime: string;
}

export interface About {
  _type: string;
  _id: string;
  title: string;
  content: Array<{
    _key: string;
    _type: string;
    value?: PortableTextBlock[];
    asset?: ImageAsset;
    alt?: string;
    caption?: string;
  }>;
}

export interface Contact {
  _type: string;
  _id: string;
  title: string;
  content: Array<{
    _type: string;
    _key: string;
    sectionTitle?: string;
    value: PortableTextBlock[];
  }>;
  banners: {
    _ref: string;
    _type: string;
    _key: string;
  }[];
}

export interface Funder {
  _type: string;
  _id: string;
  title: string;
  coverImage: {
    asset: ImageAsset;
    alt: string;
    _ref: string;
    _type: string;
  };
  body: PortableTextBlock[];
  funders: Array<{
    _key: string;
    _type: string;
    name: string;
    isMajorFunder: boolean;
    logo: {
      _type: string;
      alt?: string;
      asset: ImageAsset | undefined;
    };
  }>
}

export interface People {
  _type: string;
  _id: string;
  title: string;
  coverImage: {
    asset: ImageAsset | undefined;
    alt: string;
    _ref: string;
    _type: string;
  };
  body: PortableTextBlock[];
  boardOfDirectors: {
    name: string;
    _ref: string;
  }[];
  staff: {
    name: string;
    _ref: string;
  }[];
  banners: {
    _ref: string;
    _type: string;
  }[];
}


export interface Person {
  name: string;
  _type: string;
  _id: string;
  _ref: string;
  profileImage: ImageAsset;
  pronouns: string;
  role: string;
  ext: string;
  isBoardMember: boolean;
  affiliations: string;
  bio: PortableTextBlock[];
  jobTitle: PortableTextBlock[];
}

export interface Opportunities {
  _type: string;
  _id: string;
  name: string;
  title: string;
  coverImage: {
    asset: ImageAsset | undefined;
    alt: string;
  };
  body: PortableTextBlock[];
}

export interface Partnerships {
  _type: string;
  _id: string;
  name: string;
  title: string;
  coverImage: {
    asset: ImageAsset | undefined;
    alt: string;
  };
  body: PortableTextBlock[];
}

export interface Home {
  _type: string;
  _id: string;
  programs: {
    _ref: string;
  }[];
  aboutUs: AboutUsElement[] | Banner[];
  content: PortableTextBlock[];
  educations: {
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
    _type: string;
  }[];
}

export interface VenuePage {
  _key: string;
  _ref: string;
  _type: string;
  _id: string;
  title: string;
  content: Array<{
    _key: string;
    _type: string;
    value?: PortableTextBlock[];
    asset?: ImageAsset;
    alt?: string;
    caption?: string;
  }>;
}

export interface EducationPage {
  _key: string;
  _ref: string;
  _type: string;
  _id: string;
  content: Array<{
    _key: string;
    _type: string;
    value?: PortableTextBlock[];
    asset?: ImageAsset;
    alt?: string;
    caption?: string;
  }>;
  educations: {
    _ref: string;
  }[];

}

export interface AboutUsElement {
  _key: string;
  _ref: string;
  _type: string;
  _id: string;
  asset: ImageAsset;
}

export interface Banner {
  _type: string;
  _ref: string;
  _id: string;
  info: string;
  link: {
    text: string;
    value: string;
  };
}

export interface Donate {
  _type: string;
  _id: string;
  title: string;
  body: PortableTextBlock[];
  linkTo: string[];
  banners: {
    _ref: string;
  }[];
}
