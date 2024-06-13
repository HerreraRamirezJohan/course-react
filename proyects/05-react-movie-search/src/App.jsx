import { useEffect, useRef, useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies.js'

function useSearch() {

  const [searchMovie, setSearchMovie] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    //post validations
    if (isFirstInput.current) {
      isFirstInput.current = searchMovie === ''
      return
    }
    if (searchMovie === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (searchMovie.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if (searchMovie.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [searchMovie])

  return { searchMovie, setSearchMovie, error }
}

function App() {
  const { searchMovie, setSearchMovie, error } = useSearch()
  const { movies: mappedMovies, getMovies } = useMovies({ search: searchMovie })


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearchMovie = event.target.value
    //pre validation
    if (newSearchMovie.length > 20) return //No sea un nombre mayor a 20
    if (newSearchMovie.startsWith(' ')) return //no coloque espacios vacios al inicio

    setSearchMovie(newSearchMovie)
  }



  return (
    <div className='flex flex-col justify-center items-center'>
      <header>
        <h1>Movies & Series</h1>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='movieName'
            value={searchMovie}
            type="text"
            placeholder='Avengers, Star Wars, Fantastic Four...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='text-red-600'>{error}</p>}
      </header>

      <main className='flex justify-center items-center w-full'>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
