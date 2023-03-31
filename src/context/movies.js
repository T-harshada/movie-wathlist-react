import { createContext, useState } from "react";
import  movieSearch from '../apis/movieService'
const MovieContext = createContext()
const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([])
  const [likedMovies, setLikedMovieList] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)
  const [loading, setLoading] = useState(false)

  const addOrRemoveLikedMovie = (movie) => {
    console.log("movie",movie)
    debugger
    // check if  movie is previously not added, liked else disliked
    const foundMovie = likedMovies.find(obj => obj.id === movie.id) 
    if(likedMovies.length === 0) {
      setLikedMovieList([movie])
    }
    else if(!foundMovie) { // add movie
      setLikedMovieList((oldArray) => [...oldArray, movie])
    } else {
      setLikedMovieList(likedMovies.filter(obj => obj.id !==movie.id))
    }
    console.log(likedMovies)
  }

  const updateSearchTermAndFetchMovies = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    const movies =  await movieSearch(term);
    console.log(movies)
    setMovieList(movies)
    setLoading(false);
    // set movies
  }

  return (<MovieContext.Provider value={{movieList, likedMovies, searchTerm, loading, updateSearchTermAndFetchMovies, addOrRemoveLikedMovie}}>{children}</MovieContext.Provider>)

}
export default MovieContext
export {MovieProvider}