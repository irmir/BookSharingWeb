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
    login: null,
    password: null,
    passwordConfirm: null,
    isShowPassword: false,
    isMessage: false,
    textMessage: null,
}

export const siteReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CHANGE_INPUT_VALUE': {
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            }
        }

        case 'SHOW_PASSWORD': {

            return {
                ...state,
                isShowPassword: !state.isShowPassword
            }
        }

        case 'SHOW_MESSAGE': {

            return {
                ...state,
                isMessage: true,
                textMessage: action.payload
            }
        }

        case 'HIDE_MESSAGE': {

            return {
                ...state,
                isMessage: false
            }
        }
     
        default: {
            return state
        }
    }
}