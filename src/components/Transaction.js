import React from 'react'
import { connect } from "react-redux"
import { deleteTransaction } from "../state/actions"

const Transaction = ({ transaction, dispatch }) => {
    const { text, amount } = transaction;
    const deleteSelf = () => dispatch(deleteTransaction(transaction));
    return (
        <li className={amount < 0 ? "minus" : "plus"}>
            {text}
            <span>{amount < 0 ? "-" : null}${amount < 0 ? (amount * -1) : amount}</span>
            <button className="delete-btn" onClick={deleteSelf}>x</button>
        </li>
    )
}

export default connect()(Transaction);