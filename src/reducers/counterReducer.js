import { INCREMENT, DECREMENT, CHANGECOUNT } from "../actions/actionTypes";

const initialState = {
    countSecond: 0,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                countSecond: state.countSecond + 1,
            };

        case DECREMENT:
            return {
                countSecond: state.countSecond - 1,
            };

        case CHANGECOUNT:
            return {
                countSecond: action.payload,
            };
        default:
            return state;
    }
}