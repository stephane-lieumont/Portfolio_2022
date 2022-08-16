import React from 'react'
import { useResolvedPath, useMatch } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './style.scss'

export type MyRouteProps = {
  path: string,
  children?: React.ReactElement
}

const MyRoute: React.FunctionComponent<MyRouteProps> = ({path, children}) => {
  const resolvedPath = useResolvedPath(path!)
  const match = useMatch(resolvedPath.pathname)

  return (
    <CSSTransition
      in={match != null}
      timeout={400}
      classNames="fade"
      unmountOnExit
    >
      <div className="css-transition">
        { children }
      </div>
    </CSSTransition>
  )
}

export default MyRoute