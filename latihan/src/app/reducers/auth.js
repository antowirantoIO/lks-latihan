
const authInitialState = {
    isLogin: false,
    token: null,
    user: null
}

export const reducerAuth = (state = authInitialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
                token: action.payload.token,
                user: action.payload.user
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogin: false,
                token: null,
                user: null
            }
        default:
            return state
    }
}