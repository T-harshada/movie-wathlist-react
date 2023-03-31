import { useState } from 'react'
import Header from './componnets/Header'
import NavBar from './componnets/Navbar'
import Route from './componnets/Route'
import MovieList from './pages/MovieList'
import SearchPage from './pages/SearchPage'
import LikedMoviePage from './pages/LikedMoviePage'
import { NavigationProvider } from './context/navigation'
import { MovieProvider } from './context/movies'

const App = () => {
  return (
    <div className='container mx-auto mt-4'>
      <MovieProvider>
        <Header />
        
        <NavigationProvider>
        <NavBar />
          <Route path="/">
            <SearchPage />
            <MovieList />
          </Route>
          <Route path="/list">
            <LikedMoviePage />
          </Route>
        </NavigationProvider>

      </MovieProvider>
    </div>
  )
}
export default App