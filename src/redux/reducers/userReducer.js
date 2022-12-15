const initialState = {
    user: null,
    message: null,
    sucessMessage: null
}

const userReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "signIn":
        return {
            ...state,
            user: action.payload.user,
            message: action.payload.message
        };
        case "signOut":
        return {
            ...state,
            user: action.payload.user,
            message: action.payload.message
        }
        case "signUp":
        return {
            ...state,
            user: action.payload.user,
            message: action.payload.message
        }
        case "sucessSignUp":
        return {
            ...state,
            sucessMessage: action.payload.message,
            user: action.payload.user
        }

        default:
        return state
    }

}

export default userReducer