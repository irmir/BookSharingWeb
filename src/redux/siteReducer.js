const initialState = {
    menuItems: [{ name: 'home'}, { name: 'account' },{ name: 'settings'}, { name: 'library'}],
    descriptionSite: `The "Book Sharing" is a platform that people can visit to find and read books
    A lot of books.The main idea is a decentralized book rental network. 
    Books can be rented at one rental location and returned to another. 
    Books can be booked or viewed when and where they will be returned.
    You can also view a list of books, view a map of rental locations, view reports, etc.`,
    quote: ["“Reading", "is to the mind what exercise is to the body”"],
    authorQuote: "Joseph Addison",
    quoteAccount: ["The best cinema in the world is the brain,", "and you understand this when you read a good book."],
    authorQuoteAccount: "Ridley Scott",
    inputs: [{label: "", inputName: "nickName", type: "tex", disabled: true},
               {label: "Account ID", inputName: "id", type: "text", disabled: true},
               {label: "Email", inputName: "email", type: "email", disabled: true},
               {label: "Phone", inputName: "phoneNumber", type :"tel", disabled: true},
            //    {label: "Password", inputName: "password", type: "password", disabled: true},
            ],
    isDisable: true,
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
    isAccountPage: true,
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

        case 'CHECK_URL': {
            
            if (window.location.pathname.includes('account' || 'library')) {
                return {
                    ...state,
                    isAccountPage: true
                }
            }

            return {
                ...state
            }
        }
     

        case 'CHANGE_DISABLED': {
            debugger
            const inputs = [...state.inputs]
            inputs.forEach(item => {
                if (item.inputName === action.payload) {
                    item.disabled = !item.disabled
                }
            })

            return {
                ...state,
                inputs: inputs,
                isDisable: false
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}