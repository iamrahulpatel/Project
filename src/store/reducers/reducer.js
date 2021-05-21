import { SAVE_DATA } from "../actions/actionType";

const initialState = {
    userData = null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return {
                ...state,
                userData: action.payload
            }

        default:
            return state;
    }
}

export default reducer;