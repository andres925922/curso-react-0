import responseMovies from '../../../mocks/withDataResponse.json';

export function useMovie() {

	const movies = responseMovies.Search

	const getMoviesFromResponse = (movies) => {
		return movies?.map(movie => {
			return {
				id: movie.imdbID,
				title: movie.Title,
				year: movie.Year,
				poster: movie.Poster
			}
		})
	}

	return getMoviesFromResponse(movies)

}