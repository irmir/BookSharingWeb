const initialState = {
    popularBooks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    setBook: [],
    setsPopularBooks: [],
    count: 0,
}

export const sliderReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_NEXT_SLIDE': {
            
            if (state.setsPopularBooks.length !== 0) {
                const count = state.count + 1

                return {
                    ...state,
                    count: count,
                    setBook: state.setsPopularBooks[state.setsPopularBooks.length - count],
                }
            }

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