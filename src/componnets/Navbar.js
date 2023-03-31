import Link from "./Link";

const NavBar = () => {
  const links = [
    { label: 'Search', path: '/' },
    { label: 'My List', path: '/list' },
  ]

  const renderedLinks = links.map(link => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3 px-2.5 underline"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    )
  })
  return (<div className="flex items-start">{renderedLinks}</div>)

}
export default NavBar