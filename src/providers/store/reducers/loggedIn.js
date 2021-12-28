import { loggedIn as initialState } from '../initialState'

const loggedIn = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            };
        case 'LOGGED_OUT':
            return {
                isLoggedIn: !action.payload
            }
        default:
            return state;
        
    }
}

export default loggedIn