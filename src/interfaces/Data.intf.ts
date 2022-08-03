export interface ProjectDevData {
  id: string,
  imgFile: string,
  imgAlt?: string,
  title: string,
  description: string,
  hashtags: string[],
  released: Date,
  demoLink?: string
}

export interface SliderImageData {
  title: string;
  released: Date;
  imgFile: string;
  imgAlt: string;
}