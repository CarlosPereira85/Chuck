import { ACTIONS } from "../actions/actions"

const selectReducer = (state, {type,payload}) => {
    switch(type) {
        case ACTIONS.CHANGE:
        return state = payload
        
        default:
            return state
    }
}
export default selectReducer