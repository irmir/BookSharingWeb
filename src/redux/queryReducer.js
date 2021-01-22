const initialState = {
    activePopUp: false,
    searchContent: null
}

export const queryReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_BOOK': {
            debugger
            console.log(action.payload)
            return {
                ...state,
                searchContent: action.payload[0].title,
                activePopUp: true
            }
        }

        case 'GET_ERROR': {
            debugger
            console.log(action.payload)
            return {
                ...state
            }
        }

        case 'SHOW_POP-UP': {
            debugger
            return {
                ...state,
                searchContent: action.payload
            }
        }

        default: {
            return state
        }
    }

}