import { useState } from "react"
import { getMoviesApi } from "../services/getMovies"
import responseWithMovies from "../../../mocks/withDataResponse.json"

export function useMovie({ query, setError = null }) {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const getMovies = async () => {
		try {
			setIsLoading(true)
			const newMovies = await getMoviesApi(query)
			setMovies(newMovies)
		} catch (error) {
			console.log(error)
			if (setError) setError(error.message)
			setMovies([])
		} finally {
			setIsLoading(false)
		}
	}

	return {
		movies,
		getMovies,
		isLoading
	}

}