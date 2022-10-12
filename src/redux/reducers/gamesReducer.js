const initialState = {
    oneGame: null,
}

const gamesReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "getOneGame":
        return {
            ...state,
            oneGame: action.payload
        }

        default:
        return state
    }

}

export default gamesReducer