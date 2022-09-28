import axios from "axios"

const testActions = ()=> {

    let test1 = async (dispatch, getState)=> {
        let data = await axios.get("http://locahost:3000/api/data")
    }

}

export default testActions