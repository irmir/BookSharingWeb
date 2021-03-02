export const changeInputValue = (event) => ({
    type: 'CHANGE_INPUT_VALUE',
    payload: event
})

export const showPass = () => ({
    type: 'SHOW_PASSWORD'
})

export const showMessage = (text) => ({
    type: 'SHOW_MESSAGE',
    payload: text
})

export const hideMessage = () => ({
    type: 'HIDE_MESSAGE'
})

export const checkUrl = () => ({
    type: 'CHECK_URL'
})

export const changeDisabled = (name) => ({
    type: 'CHANGE_DISABLED',
    payload: name
})




