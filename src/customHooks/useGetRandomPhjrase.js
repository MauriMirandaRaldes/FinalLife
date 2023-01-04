import {useState, useEffect} from "react"
import phrasesActions from "../redux/actions/phrasesActions"
import {useDispatch, useSelector} from "react-redux"

/*Creo la función encargada de traer una frase aleatoria de mi colección en Mongo*/
export const useGetRandomPhrase = ()=> {
    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)
    var number = Math.floor(Math.random() * 30)
    const allPhrases = useSelector(store => store.phrasesReducer.allPhrases)
    const randomPhrase = allPhrases.filter((element, index)=> index === number )

    /*Es necesario usar un dispatch para "activar" mis actions, aunque no esté enviando nada por parámetro*/
    useEffect(()=> {
        dispatch(phrasesActions.getAllPhrases())
    },[reload])

    return {reload, setReload, randomPhrase}
}