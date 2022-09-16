import { Theme } from "./theme.intf"

export type RouteAppObject = {
  path: string
  name: string
  label?: string
  headerTitle?:string
  Component: JSX.Element  
  params?: RouteParams
}

export type RouteParams = {
  theme: Theme,
  menuIconLigth?: boolean
  mainMenuEnabled?: boolean
  headerButtonsEnabled?: boolean
  socialTheme?: Theme
}


