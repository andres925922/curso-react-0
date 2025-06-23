import { Fragment } from "react"

const MovieList = ({ movies }) => {

  return (
    <ul className="movie-list">
      {
        movies?.map(movie => (
          <li key={movie.id} className="movie">
            <h3> {movie.title} </h3>
            <p> {movie.year} </p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMovieResults = () => {
  return (
    <p> No se encontraron resultados </p>
  )
}

const Movies = ({ movies}) => {
  const hasMovies = movies?.length > 0;

  return (
    <Fragment>
      {
        hasMovies
          ? (
            <MovieList movies={movies} />
          ) :
          <NoMovieResults />
      }
    </Fragment>
  )
}

export { Movies }