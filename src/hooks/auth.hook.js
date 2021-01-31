import {useState, useCallback, useEffect} from 'react'

export const useAuth = () => {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem('userData', JSON.stringify({userId: id, token: jwtToken}))
    }, [])

    const logout = useCallback(() => {
        setUserId(null)
        setToken(null)
        localStorage.removeItem('userData')
    })

    useEffect(() => {
        debugger
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])


    return {login, logout, token, userId}
}
