import { ReactElement } from "react"
import { PortfolioData, ProjectDevData, SliderImageData } from "./data.intf"
import { SVGproperties } from "./object.intf"
import { RouteAppObject } from "./routes.intf"
import { Theme } from "./theme.intf"

//--- Interfaces Components ---//

export type BackgroundProps = {
  darken?: boolean
  ligthen?: boolean
  triangle?: boolean
  points?: boolean
  circle?: boolean
  triangleProperties?: SVGproperties
  pointsProperties?: SVGproperties
  circleProperties?: SVGproperties
}

export type ButtonProps = {
  label?: string
  outlined?: boolean
  loading?: boolean
  valid?:boolean
  white?:boolean
  className?:string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type CarouselProps = {
  slides: SliderImageData[],
  delay?: number,
  visible?: boolean,
  parralaxScrollY?: number,
  handleLoad?: CallableFunction
}

export type GalleryProps = {
  portfolioData?: PortfolioData[], 
  visible?: boolean,
  onClick?: (imageData: PortfolioData) => void
}

export type ImageViewerProps = {
  imageData?: PortfolioData,
  displayOn?: boolean,
  duration?: number,
  onClose?: CallableFunction
}

export type ModalProps = {
  title?: string, 
  children?: ReactElement,
  width?: string,
  heigth?: string,
  displayOn?: boolean,
  dismissNavigator?: boolean
  duration?: number,
  onClose?: CallableFunction
}

export type ProjectCardProps = {
  projectData: ProjectDevData
  className?:string
}

export type BadgeContactProps = {
  className?: string
}

//--- Interfaces Layout ---//

export type HeaderProps = {
  menuIsOpen?: boolean
  menuIsLigth?: boolean
  headerTitle?: string
  headerButtonsEnabled?: boolean
  theme?: Theme
  onSizeChange?: (heigth: number) => void
  onClick?: (isOpen: boolean) => void
}

export type NavBarSliderProps = {
  defaultValueOpen?: boolean
  animated?: boolean
  ligth?: boolean
  routeList?: RouteAppObject[]
  onClick?: CallableFunction  
}

export type SocialSideBarProps = {
  menuIsOpen?: boolean
  ligthen?:boolean
}

//--- Interfaces Pages ---//

export type PageProps = {
  title?: string
  isModal?: boolean
}