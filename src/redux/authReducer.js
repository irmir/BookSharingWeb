const initialState = {
    token: null,
    isAuth: false,
    isCardActive: false,
    nameButton: "Sign In",
    id: null,
    password: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'LOGIN': { 
        
            const data = JSON.parse(localStorage.getItem('userData'))

            if (data && data.token) {

                return {
                    ...state,
                    token: data.token,
                    isAuth: true,
                    isCardActive: false,
                    id: +data.id,
                    password: data.password
                }
            }

            if (action.payload) {

                const decodToken = atob(action.payload.data.access_token.split('.')[1])
                const userId = JSON.parse(decodToken)['sub'] 

                const userData = JSON.stringify({
                    id: userId, 
                    token: action.payload.data.access_token, 
                    password: action.payload.passwordUser
                })

                localStorage.setItem('userData', userData)        
                return {
                    ...state,
                    token: action.payload.data.access_token,
                    isCardActive: false,
                    isAuth: true,
                    id: +userId,
                    password: action.payload.passwordUser
                }
            }

            return state
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