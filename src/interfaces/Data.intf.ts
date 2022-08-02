export interface ProjectDevData {
  id: string,
  imgFileName: string,
  imgAlt?: string,
  title: string,
  description: string,
  hashtags: string[],
  released: Date,
  demoLink?: string
}