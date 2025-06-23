export async function getMoviesApi(query) {

    if (!query) return null

    const parseResponse = (movies) => {
		return movies?.map(movie => {
			return {
				id: movie.imdbID,
				title: movie.Title,
				year: movie.Year,
				poster: movie.Poster
			}
		})
	}

    return fetch(`https://www.omdbapi.com/?apikey=dc9d72e5&s=${query}`)
        .then(response => response.json())
        .then(data => parseResponse(data.Search))
        .catch(error => { 
            console.log(error)
            throw new Error("Error al buscar películas") 
        })
}