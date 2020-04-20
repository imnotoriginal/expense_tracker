import { INCREASE_BALANCE, DECREASE_BALANCE, REVERSE_INCREASE, REVERSE_DECREASE } from "../types"

export const changeBalance = amount => ({
    type: amount < 0 ? DECREASE_BALANCE : INCREASE_BALANCE,
    payload: amount
})

export const changeBalanceReverse = amount => ({
    type: amount < 0 ? REVERSE_DECREASE : REVERSE_INCREASE,
    payload: amount
})

