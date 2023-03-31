import { useContext, useEffect, useState } from "react"
import MovieContext from '../context/movies'
import MovieCard from '../componnets/MovieCard'
const MovieList = () => {
  const { movieList, loading } = useContext(MovieContext)
  const [showLoading, setShowLoading] = useState(false)
  useEffect(()=> {
    setShowLoading(loading)
  },[loading])
  
  const renderedList = movieList.map(movie =>{
    return (
      <MovieCard movie={movie} key={movie.id}/>
    )
  })

  const renderLoader = (<div className=""> ...loading</div>)

  return showLoading ? renderLoader : renderedList
}

export default MovieList