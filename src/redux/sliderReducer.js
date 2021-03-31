const initialState = {
    popularBooks: null,
    setBook: null,
    setsPopularBooks: [],
    count: 0,
}

export const sliderReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_POPULAR_BOOKS': {

            const books = JSON.parse(localStorage.getItem('popularBooks'))

            if (books) {

                return {
                    ...state,
                    popularBooks: books
                }
            }

            if (action.payload) {
                const popularBooks = []
    
                action.payload.forEach(book => {
                    popularBooks.push({id: book.id, cover: book.cover})
                })
    
                localStorage.setItem('popularBooks', JSON.stringify(popularBooks))
        
                return {
                    ...state,
                    popularBooks: popularBooks
                }
            }

            return state
        }

        case 'GET_NEXT_SLIDE': {
            
            if (state.setsPopularBooks.length !== 0) {
                const count = state.count + 1

                return {
                    ...state,
                    count: count,
                    setBook: state.setsPopularBooks[state.setsPopularBooks.length - count],
                }
            }

            if (state.popularBooks) {
                const { popularBooks } = state
                const intermediateArray = []
    
                for (let i = 0; i < popularBooks.length; i++) {
    
                    intermediateArray.push(popularBooks[i], popularBooks[i + 1] || popularBooks[i + 1 - popularBooks.length],
                        popularBooks[i + 2] || popularBooks[i + 2 - popularBooks.length])
                }
                const setsPopularBooks = []
    
                for (let i = 0; i < popularBooks.length; i++) {
                    setsPopularBooks.push(intermediateArray.splice(0, 3))
                }
    
                const count = state.count + 1
    
                return {
                    ...state,
                    count: count,
                    setsPopularBooks: setsPopularBooks,
                    setBook: setsPopularBooks[setsPopularBooks.length - count],
                }
            }

            return state
        }

        case 'GET_PREVIOUS_SLIDE': {
            
            const count = state.count - 1

            return {
                ...state,
                count: count,
                setBook: state.setsPopularBooks[state.setsPopularBooks.length - count],
            }
        }

        default: {
            return state
        }
    }
} 