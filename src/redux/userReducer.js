const initialState = {
    nameUser: null,
    avatar: null,
    email: null,
    phoneNumber: null,
    userTypeId: null
}

export const userReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case 'SET_USER_DATA': {
            debugger
            const profileData = JSON.parse(localStorage.getItem('profileData'))

            if (profileData) {

                return {
                    ...state,
                    ...profileData
                }
            }
            
            debugger
            console.log(action.payload)
            
            const newProfileData = {
                nameUser: action.payload.nickname,
                avatar: action.payload.avatar,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                userTypeId: action.payload.userType.id,  
            }

            localStorage.setItem('profileData', JSON.stringify(newProfileData))

            return {
                ...state,
                ...newProfileData           
            }
        }

        default: {
            return state
        }
    }
}

