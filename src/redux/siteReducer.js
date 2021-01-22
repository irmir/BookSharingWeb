const initialState = {
    menuItems: [{name:'home', url:'/'}, {name:'account', url:'/account'},
                {name:'settings', url: '/settings'}, {name:'library', url:'/library'}],
    description: null,
    quote: ["“Reading", "is to the mind what exercise is to the body”"],
    authorQuote: "Joseph Addison"
}

export const siteReducer = (state = initialState, action) => {

    switch(action.type) {

        default: {
            return state
        }
    }
}