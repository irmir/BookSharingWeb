const initialState = {
    login: null,
    password: null,
    token: null,
    userId: null,
    isAuth: false,
    isCardActive: false,
    nameButton: null,
    isMessage: false,
    textMessage: null,
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CHANGE_INPUT_VALUE': {
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            }
        }

        case 'LOGIN': { 
            const data = JSON.parse(localStorage.getItem('userData'))

            if (data && data.access_token) {

                return {
                    ...state,
                    token: data.access_token,
                    isAuth: true,
                    isCardActive: false
                }
            }

            if (action.payload) {
                localStorage.setItem('userData', JSON.stringify(action.payload))           
                return {
                    ...state,
                    token: action.payload.access_token,
                    isCardActive: false,
                    isAuth: true,
                }
            }
             return {...state}
            
        }

        case 'LOGOUT': {
            localStorage.clear()   

            return {
                ...state,
                token: null,
                isAuth: false
            }
        }

        case 'SHOW_MESSAGE': {

            return {
                ...state,
                isMessage: true,
                textMessage: action.payload
            }
        }

        case 'HIDE_MESSAGE': {

            return {
                ...state,
                isMessage: false
            }
        }

        case 'SHOW_AUTH_CARD': {
    
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