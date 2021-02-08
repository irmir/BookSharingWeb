const initialState = {
    activePopUp: false,
    searchContent: null
}

export const queryReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_BOOK': {
            
            return {
                ...state,
                searchContent: action.payload,
            }
        }

        case 'GET_ERROR': {
            
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }

}