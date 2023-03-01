import { ACTIONS } from "../actions/actions";

const jokeReducer = (state, {type,payload}) => {
    switch(type) {
        case ACTIONS.GET_JOKE:
        return state = payload
        case ACTIONS.ERROR:
        return state = payload
        default:
            return state
    }
}
export default jokeReducer