import withResult from '../mocks/response.json'
import withoutResult from '../mocks/no-response.json'
import { useState } from 'react'

export function useMovies({ search }) {
  console.log(search);
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    console.log(search);
    if (search) {
      // setResponseMovies(withResult)
      console.log(search);
      fetch(`https://www.omdbapi.com/?apikey=fb489512&s=${search}`)
      .then(res => res.json())
      .then(json => {
        setResponseMovies(json)
      })
    } else {
      setResponseMovies(withoutResult)
    }
  }

  return { movies: mappedMovies, getMovies }
}