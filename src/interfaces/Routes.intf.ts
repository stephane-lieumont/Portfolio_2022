import { Theme } from "./Theme.intf"

export type RouteAppObject = {
  path: string
  name: string
  label?: string
  title: string
  headerTitle?:string
  Component: React.FunctionComponent<PageProps>
  menuIconLigth?: boolean
  params?: RouteParams
}

export type RouteParams = {
  theme: Theme
}

export type PageProps = {
  title?: string
}

