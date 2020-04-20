import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../types"
const transactions = [];

export default (state = transactions, { type, payload }) => {
    switch (type) {
        case ADD_TRANSACTION:
            payload.id = Date.now()
            const newState = [payload, ...state];
            newState.length > 3 && newState.pop()
            return newState

        case DELETE_TRANSACTION:
            return state.filter(t => t.id !== payload.id)

        default:
            return state
    }
}