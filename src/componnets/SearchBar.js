import { useState, useContext } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import MovieContext from '../context/movies'

const SearchBar = () => {

  const [term, setTerm] = useState('')
  const { updateSearchTermAndFetchMovies } = useContext(MovieContext)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    updateSearchTermAndFetchMovies(term)
  }
  return (
    <div className="">
      <form onSubmit={handleFormSubmit}>
        <div className='flex gap-2 border-solid border-2 border-sky-500 px-2.5 py-2.5 max-w-xl'>
          <MdOutlineSearch className='text-2xl'/>
          <input className="w-full" onChange={(e) => setTerm(e.target.value)} value={term} placeholder="Search"/>
        </div>
        
      </form>
    </div>)
}

export default SearchBar