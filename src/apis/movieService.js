import axios from 'axios'
const movieSearch = async (searchTerm) => {
  const response =  axios.get('https://api.themoviedb.org/3/search/movie',{
    params: {
      api_key: '983c4abf239ebba325fa9849946680f5',
      query: searchTerm
    }
  })
  return (await response).data.results
}
export default movieSearch