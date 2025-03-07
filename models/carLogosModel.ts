export interface CarLogo {
  name: string;
  slug: string;
  image: CarLogoImage;
}

export interface CarLogoImage {
  source: string;
  thumb: string;
  optimized: string;
  original: string;
  localThumb: string;
  localOptimized: string;
  localOriginal: string;
}
