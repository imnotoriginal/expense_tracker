import { INCREASE_BALANCE, DECREASE_BALANCE, REVERSE_INCREASE, REVERSE_DECREASE } from "../types"

const balance = {
    amount: 0,
    income: 0,
    expence: 0
}

export default (state = balance, { type, payload }) => {
    payload = parseInt(payload);
    switch (type) {
        case INCREASE_BALANCE:
            return {
                ...state,
                amount: state.amount + payload,
                income: state.income + payload
            }
        case DECREASE_BALANCE:
            return {
                ...state,
                amount: state.amount + payload,
                expence: state.expence - payload
            }
        case REVERSE_INCREASE:
            return {
                ...state,
                amount: state.amount - payload,
                income: state.income - payload
            }
        case REVERSE_DECREASE:
            return {
                ...state,
                amount: state.amount - payload,
                expence: state.expence + payload
            }
        default:
            return state
    }
}
