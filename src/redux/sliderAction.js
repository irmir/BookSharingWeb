export const getNextSlide = () => ({
    type: 'GET_NEXT_SLIDE'
})

export const getPrevSlide = () => ({
    type: 'GET_PREVIOUS_SLIDE'
})

export const setPopularBooks = (data) => ({
    type: 'SET_POPULAR_BOOKS',
    payload: data
})
