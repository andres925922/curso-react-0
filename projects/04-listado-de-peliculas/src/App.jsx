import { Fragment } from 'react'
import './App.css';

import { Movies } from './Features/Movies/components/Movies.jsx'
import { useSearch } from './Features/Movies/hooks/useSearch.jsx'
import { useMovie } from './Features/Movies/hooks/useMovie.jsx'

function App() {
  const { query, error, updateQuery, setError, isFirstRender } = useSearch()
  const { movies, getMovies, isLoading } = useMovie({ query, setError })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const query = e.target.query.value
    if (query?.length === 0 && !isFirstRender) {
      setError('La busqueda no puede estar vacia')
      return
    }

    setError(null)
    await getMovies(query)
  }

  return (
    <Fragment>
      <header>
        <h1> Listado de peliculas </h1>
        <form className='movie-seach' onSubmit={handleSubmit}>
          <input 
            className='movie-search-input' 
            name="query" 
            id="movie-search-input" 
            placeholder='Avengers, Matrix, ...' 
            value={query}
            onChange={updateQuery}
          />
          <button type="submit"> Search </button>
        </form>
        {
            error && !isFirstRender && (
              <p className="movie-search-error"> {error} </p>
            )
          }
      </header>

      <main className="page">
        {
          isLoading && (
            <div id="loader"></div>
          )
        }
        {
          !isLoading && movies?.length > 0 && (
            <Movies movies={movies} />
          )
        }
      </main>
    </Fragment>
  )
}

export default App
