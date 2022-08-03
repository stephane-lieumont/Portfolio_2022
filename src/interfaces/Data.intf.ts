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