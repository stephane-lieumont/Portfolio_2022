export interface ProjectDevData {
  id: string,
  imgFile: string,
  imgAlt: string,
  title: string,
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