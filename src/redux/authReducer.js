const initialState = {
    login: null,
    password: null,
    token: null,
    userId: null,
    isAuth: false,
    searchText: null,
    isCardActive: false,
    nameButton: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CHANGE_INPUT_VALUE': {
            debugger
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
        }

        case 'LOGIN': {

            debugger
            localStorage.setItem('userData', JSON.stringify(action.payload))
            
            return {
                ...state,
                token: action.payload.access_token,
            }
        }

        case 'SHOW_ERROR': {
            debugger
            return {
                ...state,
                error: action.payload
            }
        }

        case 'SHOW_AUTH_CARD': {
            debugger
            return {
                ...state,
                nameButton: action.payload,
                isCardActive: true

            }
        }

        default: {
            return state
        }
    }
}