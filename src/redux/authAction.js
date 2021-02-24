export const login = (data) => ({
    type: 'LOGIN',
    payload: data
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const showAuthCard = (nameButton) => ({
    type: 'SHOW_AUTH_CARD',
    payload: nameButton
})
