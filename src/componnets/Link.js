import { useContext } from "react";
import classNames from 'classnames'

import NavigationContext from "../context/navigation";

const Link = ({to, children, className, activeClassName}) => {
  const { navigateTo } = useContext(NavigationContext)
  const classes =  classNames(
    'text-blue-500',
    className,
    )

  const handleClick = (event) => {
    event.preventDefault()
    navigateTo(to)

  }
  return ( <a className={classes} href={to} onClick={handleClick}>{children}</a>)
}
export default Link