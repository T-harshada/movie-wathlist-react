import { useContext } from 'react'
import { MdStar } from 'react-icons/md'
import MovieContext from '../context/movies'

const Header = () => {
  const { likedMovies } =  useContext(MovieContext)
  return (
    <div className='flex justify-between max-w-xl pb-2.5 pt-2.5'>
      <h2 className='text-3xl'>My Movie Watch List</h2>
      <div className='flex justify-between '>
        <MdStar className='text-3xl' />
        <span className='text-3xl pl-3'>{likedMovies.length}</span>
      </div>
    </div>
  )
}
export default Header