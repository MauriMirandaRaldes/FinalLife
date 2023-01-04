import { useSelector } from "react-redux";

/*Acá coloco todos los llamados al store*/

export const useGetUser = ()=> {
    const user = useSelector((store) => store.userReducer.user)
    return {user}
}