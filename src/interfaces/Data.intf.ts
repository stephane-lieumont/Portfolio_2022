export interface ProjectDevData {
  id: string,
  imgFile: string,
  imgFileProject: string,
  imgAlt: string,
  title: string,
  hashName: string,
  description: string,
  hashtags: string[],
  released: Date,
  demoLink?: string
}

export interface SliderImageData {
  id: string,
  title: string;
  released: Date;
  imgFile: string;
  imgAlt: string;
}

export interface PortfolioData {
  id: string,
  imgFile: string,
  imgFileThumb: string,
  imgAlt: string,
  title: string,
  stack: StackItem[]
  released: Date,
}

export type SpecialityData = {
  name: string,
  src: string,
  alt: string,
  size: number
}

export interface StackItem {
  toString: string,
  iconClass: string,
  type: StackType
}

export enum StackType {
  max,
  vray,
  substance,
  photoshop,
  illustrator,
  zbrush
}