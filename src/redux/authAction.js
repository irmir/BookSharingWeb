export const changeInputValue = (event) => ({
    type: 'CHANGE_INPUT_VALUE',
    payload: event
})

export const startLogin = (data) => ({
    type: 'LOGIN',
    payload: data
})

export const errorLogin = (error) => ({
    type: 'ERROR_LOGIN',
    payload: error
})

export const login = (loginUser, passwordUser) => {

    debugger
    return async (dispatch) => {

        const localData = localStorage.getItem("userData")
    debugger
        if (localData) {
            dispatch(startLogin(JSON.parse(localData)))
        }
        if (!loginUser) {
            return
        }
        try {
            const response = await fetch('api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json-patch+json'
                },
                body: JSON.stringify({
                    login: loginUser, password: passwordUser
                })
            })

            const data = await response.json()
            debugger
            if (!response.ok) {
                throw new Error(data.title)
            }
            console.log(data)
            dispatch(startLogin(data))
        } catch (error) {
            debugger
            dispatch(errorLogin(error))
        }
    }
}

export const showAuthCard = (nameButton) => ({
    type: 'SHOW_AUTH_CARD',
    payload: nameButton
})