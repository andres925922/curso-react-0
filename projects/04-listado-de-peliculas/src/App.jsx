import { Fragment } from 'react'
import './App.css';

import { Movies } from './Features/Movies/components/Movies.jsx'
import { useSearch } from './Features/Movies/hooks/useSearch.jsx'

function App() {
  const { query, error, updateQuery, setError } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value
    if (query?.length === 0) {
      setError('La busqueda no puede estar vacia')
      return
    }

    setError(null)
    console.log(query)
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
            error && (
              <p className="movie-search-error"> {error} </p>
            )
          }
      </header>

      <main className="page">
        <Movies />
      </main>
    </Fragment>
  )
}

export default App
