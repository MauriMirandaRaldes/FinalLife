// import {createSlice} from "@reduxjs/toolkit"
// import axios from "axios"

// const initialState = {
//     oneGame: null
// }

// const gamesReducer = (state = initialState, action)=> {

//     switch (action.type) {
//         case "getOneGame":
//         return {
//             ...state,
//             oneGame: action.payload
//         }

//         default: 
//         return state
    
//     }

// }

// export default gamesReducer



// // const gamesSlice = createSlice({
// //     name: "games",
// //     initialState,
// //     reducers: {
// //         addGame: async (state, action)=> {
// //             try {
// //                 await axios.post("http://localhost:8000/api/allGames", action.payload)
// //             } catch (error){
// //                 console.log(error)
// //             }
// //         },
// //         getOneGame: async (state, action)=> {
// //             let data = await axios.get(`http://localhost:8000/api/allGames/${action.payload}`)
// //             if (data){
                
// //             }
// //         }
// //     }
// // })

// // /*Exportamos el reducer porque el store lo requiere*/
// // export const {addGame, getOneGame} = gamesSlice.actions
// // export default gamesSlice.reducer