const initialState = {
    nameUser: null,
    avatar: null,
    email: null,
    phoneNumber: null,
    userType: null
}

export const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_USER_DATA': {
            debugger
            console.log(action.payload)
            console.log(action.payload.userType)
        
            return {
                ...state,
                nameUser: action.payload.nickname,
                avatar: action.payload.avatar,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                userType: action.payload.userType                
            }
        }

        default: {
            return state
        }
    }
}

