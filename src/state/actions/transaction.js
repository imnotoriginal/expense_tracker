import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../types"
import { changeBalance, changeBalanceReverse } from "./balance"

export const addTransaction = payload => async dispatch => {
    dispatch(changeBalance(payload.amount));
    return dispatch({
        type: ADD_TRANSACTION,
        payload
    })
}

export const deleteTransaction = payload => async dispatch => {
    dispatch(changeBalanceReverse(payload.amount));
    return dispatch({
        type: DELETE_TRANSACTION,
        payload
    })
}