import React from "react"
import { PageProps } from "./component.intf"
import { Theme } from "./theme.intf"

export type RouteAppObject = {
  path: string
  name: string
  label?: string
  title?: string
  headerTitle?:string
  Component:React.FunctionComponent<PageProps>
  params?: RouteParams
}

export type RouteParams = {
  theme: Theme,
  menuIconLigth?: boolean
  mainMenuEnabled?: boolean
  headerButtonsEnabled?: boolean
  socialTheme?: Theme
}


