export const loggedIn = () => dispatch => {
   dispatch( {
       type: 'LOGGED_IN',
    //    payload: loggedIn
   })

}

export const loggedOut = (loggedOut) => dispatch => {
    dispatch({
        type: 'LOGGED_OUT',
        payload: loggedOut
    })
}