import { Theme } from "./Theme.intf"

export type RouteAppObject = {
  path: string
  name: string
  label?: string
  headerTitle?:string
  Component: JSX.Element
  menuIconLigth?: boolean
  params?: RouteParams
}

export type RouteParams = {
  theme: Theme
  mainMenuEnabled?: boolean
  headerButtonsEnabled?: boolean
}

export type PageProps = {
  title?: string
  isModal?: boolean
}

