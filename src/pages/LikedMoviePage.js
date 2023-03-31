import { useContext, useEffect } from "react"
import MovieContext from '../context/movies'


const LikedMoviePage = () => {
  const { likedMovies } =  useContext(MovieContext)
  useEffect(() => {
    console.log(likedMovies)
  },[likedMovies])
  console.log(likedMovies)
  const renderedList = likedMovies.map(movie => {
    return (
      <div className=" flex justify-between max-w-xl border border-1 border-gray-200 pt-3 pb-3 px-3 py-3 text-2xl">
        {movie.title}
      </div>
    )
  })
  return renderedList
}
export default LikedMoviePage