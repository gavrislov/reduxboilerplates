import { INCREMENT, DECREMENT, CHANGECOUNT } from "./actionTypes";

export function increment() {
    return function(dispatch) {
        dispatch({
            type: INCREMENT,
        });
    };
}

export function decrement() {
    return function(dispatch) {
        dispatch({
            type: DECREMENT,
        })     
    }
}

export function changeCount(numberToChangeTo) {
    return function(dispatch) {
        dispatch({
            type: CHANGECOUNT,
            payload: numberToChangeTo,
        });
    };
}