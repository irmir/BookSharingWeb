const initialState = {
    profileData: null,
    formData: null,
    newInputValue: null
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_USER_DATA': {

            const data = JSON.parse(localStorage.getItem('profileData'))

            if (data) {

                return {
                    ...state,
                    profileData: data
                }
            }

            if (action.payload) {

                const profileData = {
                    nickName: action.payload.nickname,
                    avatar: `data:image/gif;base64,${action.payload.avatar}`,
                    email: action.payload.email,
                    phoneNumber: action.payload.phoneNumber,
                    userTypeId: action.payload.userType.id,
                    // password: action.payload.password,
                    // passwordConfirm: action.payload.password
                }

                localStorage.setItem('profileData', JSON.stringify(profileData))

                return {
                    ...state,
                    profileData: profileData,
                }
            }

            return state
        }

        case 'UPDATA_PROFILE_DATA': {

            const key = action.payload.inputName
            let value = action.payload.inputValue

            if (key === "avatar") {
                (async () => {
                    function fileTobase64(file) {
                        return new Promise(resolve => {
                            const reader = new FileReader()
                            reader.onload = () => resolve(reader.result)
                            reader.readAsDataURL(file)
                        })
                    }
                    value = await fileTobase64(value)
                    const updatedProfileData = { ...state.profileData, [key]: value }
                    localStorage.setItem('profileData', JSON.stringify(updatedProfileData))
                    return {
                        ...state,
                        profileData: updatedProfileData
                    }
                })()
            }

            if (key === "avatar") {
                value = URL.createObjectURL(value)
            }

            const updatedProfileData = { ...state.profileData, [key]: value }
            localStorage.setItem('profileData', JSON.stringify(updatedProfileData))
            return {
                ...state,
                profileData: updatedProfileData
            }
        }

        case 'LOGOUT': {

            return {
                ...state,
                profileData: null,
                formData: null
            }
        }

        default: {
            return state
        }
    }
}

