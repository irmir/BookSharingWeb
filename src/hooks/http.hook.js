import { useState, useCallback } from "react"

export const useHttp = () => {
    debugger

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async(url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'

            }
            const response = await fetch(url, {method, body, headers})
            const data = await (await response).json()
            console.log(data)
            if (!response.ok) {
                throw new Error (data.title || "Oops")
            }     
            
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.title)
            throw e
        }

    }, [])

    return { loading, request, error }
}