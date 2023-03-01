import { useReducer } from "react"
import {ACTIONS} from '../actions/actions'
import categoriesReducer from '../reducers/categoriesReducer'
import jokeReducer from '../reducers/jokeReducer'
import selectReducer from '../reducers/selectReducer'
import MyContext from './MyContext'

const MyProvider = ({children}) => {
  const URL = 'https://api.chucknorris.io/jokes/'

  const initializer = {results: null,loading: true, error: null}

  const [categories, categoriesDispatch] = useReducer (categoriesReducer,initializer)
  const [joke, jokeDispatcher] = useReducer (jokeReducer, initializer)
  const [select, selectDispatcher] = useReducer (selectReducer, null)


const handleJokeButton = () => {
  const URLJOKE = `${URL}random?category=${select}`
  fetch(URLJOKE)
  .then((response) => response.json())
  .then ((results) => jokeDispatcher({type:ACTIONS.GET_JOKE, payload: {...joke, results,loading:false}}))
  .catch ((error) => jokeDispatcher({type: ACTIONS.ERROR, payload: {...joke,loading:false, error}}))
}


  return (
    <MyContext.Provider value={{select,selectDispatcher,URL,categories, categoriesDispatch, joke,handleJokeButton}}>
      {children}
    </MyContext.Provider>
  )
}
export default MyProvider