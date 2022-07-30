export type RouteAppObject = {
  path: string
  name: string
  label?: string
  title: string
  Component: React.FunctionComponent<PageProps>
  menuIconLigth?: boolean
}

export type PageProps = {
  title?: string
}