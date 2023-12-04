export type Category = {
  id: number,
  name: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  title: string,
  rank: number,
  image: {
    id: number,
    name: string,
    alternativeText: string | null,
    caption: string | null,
    width: number,
    height: number,
    formats: any,
    hash: string,
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null,
    provider: string;
    provider_metadata: any,
    createdAt: Date;
    updatedAt: Date;
  };
};