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
    formData: [{label: "", inputName: "name", type: "tex", placeholder: "Enter name", disabled: true},
               {label: "Account ID", inputName: "id", type: "text", placeholder: "", disabled: true},
               {label: "Email", inputName: "email", type: "email", placeholder: "Enter e-mail", disabled: true},
               {label: "Phone", inputName: "phone", type :"tel", placeholder: "Enter phone", disabled: true},
               {label: "Password", inputName: "password", type: "password", placeholder: "", disabled: true},
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
    isAccountPage: false,
}

export const siteReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CHANGE_INPUT_VALUE': {
            debugger
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
            const newFormDate = [...state.formData]
            newFormDate.forEach(item => {
                if (item.inputName === action.payload) {
                    item.disabled = false
                }
            })

            return {
                ...state,
                formData: newFormDate,
                isDisable: false
            }
        }

        default: {
            return state
        }
    }
}