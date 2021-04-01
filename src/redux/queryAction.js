export const getBook = (data) => ({
    type: 'GET_BOOK',
    payload: data
}) 

export const getDataLocation = (data) => ({
    type: 'GET_DATA_LOCATION',
    payload: data
})

export const hideSearchCard = () => ({
    type: 'HIDE_SEARCH_CARD'
})
