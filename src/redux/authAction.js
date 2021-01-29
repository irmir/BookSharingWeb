import {useHttp} from '../hooks/http.hook.js'

// const {request, loading, error} = useHttp()

export const changeInputValue = (event) => ({
    type: 'CHANGE_INPUT_VALUE',
    payload: event
})

export const startLogin = (data) => ({
    type: 'LOGIN',
    payload: data
})

export const showError = (text) => ({
    type: 'SHOW_ERROR',
    payload: text
})

// export const register = (login, password) => {

//      return async (dispatch) => {

//         try {
//             const response = await request('/api/auth/register', 'POST', {login, password})
//         } catch (e) {}
//      }   
    

// }



// export const login = (loginUser, passwordUser) => {

//     debugger
//     return async (dispatch) => {

//         const localData = localStorage.getItem("userData")
//     debugger
//         if (localData) {
//             dispatch(startLogin(JSON.parse(localData)))
//         }
//         if (!loginUser) {
//             return
//         }
//         try {
//             const response = await fetch('api/auth/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json-patch+json'
//                 },
//                 body: JSON.stringify({
//                     login: loginUser, password: passwordUser
//                 })
//             })

//             const data = await response.json()
//             debugger
//             if (!response.ok) {
//                 throw new Error(data.title)
//             }
//             console.log(data)
//             dispatch(startLogin(data))
//         } catch (error) {
//             debugger
//             dispatch(errorLogin(error))
//         }
//     }
// }

export const showAuthCard = (nameButton) => ({
    type: 'SHOW_AUTH_CARD',
    payload: nameButton
})
