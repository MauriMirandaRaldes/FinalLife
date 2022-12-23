const initialState = {
    oneGame: null,
    message:null
}

const gamesReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "getOneGame":
        return {
            ...state,
            oneGame: action.payload
        }

        case "updateGame":
        return {
            ...state,
            message:action.payload.message,
            oneGame:action.payload.updateGame
        }

        default:
        return state
    }

}

export default gamesReducer