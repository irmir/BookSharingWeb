const initialState = {
    isAuth: false,
    isCardActive: false,
    nameButton: "Sign In",
    isLoginClick: false,
    authData: null,
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'LOGIN': {
            
            const data = JSON.parse(localStorage.getItem('authData'))

            if (data && data.token) {

                return {
                    ...state,
                    isAuth: true,
                    isCardActive: false,
                    authData: data
                }
            }

            if (action.payload) {

                const decodToken = atob(action.payload.data.access_token.split('.')[1])
                const userId = JSON.parse(decodToken)['sub']

                const authData = {
                    id: userId,
                    token: action.payload.data.access_token,
                    password: action.payload.password
                }

                localStorage.setItem('authData', JSON.stringify(authData))
                return {
                    ...state,
                    isCardActive: false,
                    isAuth: true,
                    authData: authData
                }
            }

            return state
        }

        case 'SHOW_AUTH_CARD': {

            if (action.payload === "Sign In") {
                return {
                    ...state,
                    isLoginClick: true,
                    nameButton: action.payload,
                    isCardActive: true
                }
            }

            return {
                ...state,
                nameButton: action.payload,
                isCardActive: true,
                isLoginClick: false
            }
        }

        case 'HIDE_AUTH_CARD': {

            return {
                ...state,
                isCardActive: false
            }
        }

        case 'LOGOUT': {
            localStorage.clear()

            return {
                ...state,
                authData: { ...state.authData, token: null },
                isAuth: false
            }
        }

        default: {
            return state
        }
    }
}