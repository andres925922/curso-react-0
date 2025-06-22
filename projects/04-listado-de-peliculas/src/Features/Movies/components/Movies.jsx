import { Fragment } from "react"
import { useMovie } from "../hooks/useMovie.jsx"

const MovieList = ({ movies }) => {

  return (
    <ul className="movie-list">
      {
        movies?.map(movie => (
          <li key={movie.id}>
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
    <p> Not found </p>
  )
}

const Movies = () => {
  const movies = useMovie()
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