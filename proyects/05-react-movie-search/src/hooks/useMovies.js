import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search);


  const getMovies = useMemo(() =>{
    return async ({search}) => {
      if (search === previousSearch.current) return
  
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    }
  }, [search])

  // const sortMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies }
}