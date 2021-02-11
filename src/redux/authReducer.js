const initialState = {
    token: null,
    isAuth: false,
    isCardActive: false,
    nameButton: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

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

        case 'SHOW_AUTH_CARD': {
    
            return {
                ...state,
                nameButton: action.payload,
                isCardActive: true
            }
        }

        case 'LOGOUT': {
            localStorage.clear()   
            
            return {
                ...state,
                token: null,
                isAuth: false
            }
        }        

        default: {
            return state
        }
    }
}