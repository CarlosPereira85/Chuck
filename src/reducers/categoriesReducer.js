import { ACTIONS } from "../actions/actions";


 const categoriesReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.GET_CATEGORIES:
            return state = payload;
        case ACTIONS.ERROR:
            return state = payload
        default:
            return state
    }

};

export default categoriesReducer