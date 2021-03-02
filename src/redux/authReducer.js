const initialState = {
    token: null,
    isAuth: false,
    isCardActive: false,
    nameButton: "Sign In",
    id: null
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
                    id: +data.id
                }
            }

            if (action.payload) {

                const decodToken = atob(action.payload.access_token.split('.')[1])
                const userId = JSON.parse(decodToken)['sub'] 

                const userData = JSON.stringify({id: userId, token: action.payload.access_token})
    
                localStorage.setItem('userData', userData)        
                return {
                    ...state,
                    token: action.payload.access_token,
                    isCardActive: false,
                    isAuth: true,
                    id: +userId
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