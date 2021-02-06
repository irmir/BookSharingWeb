const initialState = {
    menuItems: [{ name: 'home'}, { name: 'account' },{ name: 'settings'}, { name: 'library'}],
    descriptionSite: `The "Book Sharing" is a platform that people can visit to find and read books
    A lot of books.The main idea is a decentralized book rental network. 
    Books can be rented at one rental location and returned to another. 
    Books can be booked or viewed when and where they will be returned.
    You can also view a list of books, view a map of rental locations, view reports, etc.`,
    quote: ["“Reading", "is to the mind what exercise is to the body”"],
    authorQuote: "Joseph Addison",
    bgImg: "booksharing-sign-in.jpg",
    numBooks: 5265,
    numUsers: 27567,
    numLocations: 244,
    email: "booksharing@gmail.com",
    locations: [{name: "Library 1", coord:[53.90033565666059, 27.552571699685583], id: 1, img: 'library.jpg'},
                {name: "Library 2", coord:[53.88910744801865, 27.58381406911367], id: 2, img: 'library.jpg'},
                {name: "Library 3", coord:[53.88384634856246, 27.55291502242655], id: 3, img: 'library.jpg'},
                {name: "Library 4", coord:[53.91418973681132, 27.562871381914626], id: 4, img: 'library.jpg'}],
    location: {name: "Library 1", coord:[53.90033565666059, 27.552571699685583], id: 1, img: 'library.jpg'},
}

export const siteReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_DATA_LOCATION': {
            debugger
            console.log (action.payload)
            console.log (action.payload[1])

            const location = state.locations.find((item) => item.id === action.payload.id)

            return {
                ...state,
                location: location   
            }
        }
     
        default: {
            return state
        }
    }
}