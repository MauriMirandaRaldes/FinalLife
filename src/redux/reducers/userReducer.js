const initialState = {
    user: null,
    message: null
}

const userReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "signIn":
        return {
            user: action.payload.user,
            message: action.payload.message
        };
        case "signOut":
        return {
            user: action.payload.user,
            message: action.payload.message
        }

        default:
        return state
    }

}

export default userReducer