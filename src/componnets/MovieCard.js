import { useState, useContext } from "react"
import MovieContext from '../context/movies'
import { MdStar } from 'react-icons/md'
const MovieCard = ({movie}) => {
  const { addOrRemoveLikedMovie } = useContext(MovieContext)
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
    addOrRemoveLikedMovie(movie)
  }
  return (
    <div className=" flex justify-between max-w-xl border border-1 border-gray-200 pt-3 pb-3 px-3 py-3 text-2xl">
      {movie.title}
      <MdStar className={`cursor-pointer ${liked && 'text-green-500'}`} onClick={handleClick} />
    </div>
  )
}
export default MovieCard