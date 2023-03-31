import SearchBar from "../componnets/SearchBar"

const SearchPage = () => {
  const handleSearchTermSubmit = () => {
    console.log("called")
  }
  return (
    <div>
      <SearchBar onSubmit={handleSearchTermSubmit} />
    </div>
  )
}
export default SearchPage
