export const getBook = (data) => ({
    type: 'GET_BOOK',
    payload: data
}) 

export const getError = (error) => ({
    type: 'GET_ERROR',
    payload: error
})

export const searchBook = (searchQuery) => {
   debugger
    return async (dispatch) => {
        try {
            const response = await fetch(`/api/books/search/${searchQuery}`)
            const data = await response.json()
            debugger
            if (!response.ok) {
                throw new Error(data.title)
            }
            console.log(data)
            dispatch(getBook(data))
        } catch (error) {
            debugger
            dispatch(getError(error))
        }
    }
}

export const showPopUp = (searchContent) => ({
    type: 'SHOW_POP-UP',
    payload: searchContent
})

