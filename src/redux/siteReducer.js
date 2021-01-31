const initialState = {
    menuItems: [{ name: 'home', url: '/' }, { name: 'account', url: '/account' },
    { name: 'settings', url: '/settings' }, { name: 'library', url: '/library' }],
    descriptionSite:`The "Book Sharing" is a platform that people can visit to find and read books
    A lot of books.The main idea is a decentralized book rental network. 
    Books can be rented at one rental location and returned to another. 
    Books can be booked or viewed when and where they will be returned.
    You can also view a list of books, view a map of rental locations, view reports, etc.`,
    quote: ["“Reading", "is to the mind what exercise is to the body”"],
    authorQuote: "Joseph Addison",
    urlImg: "./img/booksharing-sign-in.jpg",
    numBooks: 5265,
    numUsers: 27567,
    numLocations: 244,
    popularBooks: [{urlImg: './img/book1.jpg', idBook: '1'}, {urlImg: './img/book3.jpg', idBook: '2'},
    {urlImg: './img/book4.jpg', idBook: '3'}, {urlImg: './img/book5.jpg', idBook: '5'}],
    email: "booksharing@gmail.com" 
}

export const siteReducer = (state = initialState, action) => {

    switch (action.type) {

        default: {
            return state
        }
    }
}