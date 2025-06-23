import { useEffect, useState } from "react";

export const useSearch = () => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const [isFirstRender, setIsFirstRender] = useState(true)


    const updateQuery = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {

        if (isFirstRender) {
            setIsFirstRender(false)
            return
        }

        if (query.length < 3) {
            setError('La busqueda debe tener al menos 3 caracteres')
            return
        }

        if (query.match(/^\d+$/)) {
            setError('La busqueda no puede comenzar con un numero')
            return
        }

        return () => {
            setError(null)
        }

    }, [query])

    return {
        query,
        error,
        updateQuery,
        setError,
        isFirstRender
    }
}