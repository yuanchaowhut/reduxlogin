import isEmpty from "lodash/isEmpty";
import {SET_CURRENT_USER} from "../constants";

const initalState = {
    isAuthenticated: false,
    user: {}
}

const auth = (state = initalState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        default:
            return state
    }
}

export default auth
