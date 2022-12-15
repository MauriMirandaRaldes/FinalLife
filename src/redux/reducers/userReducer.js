const initialState = {
    user: null,
    messageSignUp: null,
    messageSignIn: null,
    messageSignOut: null,
    sucessMessageSignUp: null,
    sucessMessageSignIn: null
}

const userReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "signIn":
        return {
            ...state,
            user: action.payload.user,
            messageSignIn: action.payload.message
        };
        case "signOut":
        return {
            ...state,
            user: action.payload.user,
            messageSignOut: action.payload.message,
            messageSignIn: null,
            sucessMessageSignIn: null
        }
        case "signUp":
        return {
            ...state,
            user: action.payload.user,
            messageSignUp: action.payload.message
        }
        case "sucessSignUp":
        return {
            ...state,
            sucessMessageSignUp: action.payload.message,
            user: action.payload.user
        }
        case "sucessSignIn":
        return {
            ...state,
            sucessMessageSignIn: action.payload.message,
            user: action.payload.user
        }

        default:
        return state
    }

}

export default userReducer