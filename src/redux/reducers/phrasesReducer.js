const initialState = {
    allPhrases: []
}

const phrasesReducer = (state = initialState, action)=> {

    switch (action.type) {
        case "getAllPhrases":
        return {
            ...state,
            allPhrases: action.payload
        }
    
        default:
        return state
    }

}

export default phrasesReducer