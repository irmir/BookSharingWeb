export const changeInputValue = (event) => ({
    type: 'CHANGE_INPUT_VALUE',
    payload: event
})

export const login = (data) => ({
    type: 'LOGIN',
    payload: data
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const showMessage = (text) => ({
    type: 'SHOW_MESSAGE',
    payload: text
})

export const hideMessage = () => ({
    type: 'HIDE_MESSAGE'
})

export const showAuthCard = (nameButton) => ({
    type: 'SHOW_AUTH_CARD',
    payload: nameButton
})
