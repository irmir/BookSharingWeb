const initialState = {
    searchContent: null,
    nameUser: null,
    img: null,
    lastNameUser: null,
    locations: [{name: "Library 1", coord:[53.90033565666059, 27.552571699685583], id: 1, img: 'library.jpg'},
                {name: "Library 2", coord:[53.88910744801865, 27.58381406911367], id: 2, img: 'library.jpg'},
                {name: "Library 3", coord:[53.88384634856246, 27.55291502242655], id: 3, img: 'library.jpg'},
                {name: "Library 4", coord:[53.91418973681132, 27.562871381914626], id: 4, img: 'library.jpg'}],
    location: {name: "Library 1", coord:[53.90033565666059, 27.552571699685583], id: 1, img: 'library.jpg'},
}

export const queryReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_BOOK': {
            
            return {
                ...state,
                searchContent: action.payload,
            }
        }

        case 'GET_DATA_LOCATION': {

            const location = state.locations.find((item) => item.id === action.payload.id)

            return {
                ...state,
                location: location   
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