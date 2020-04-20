import React from 'react'
import Transaction from "./Transaction"
import { connect } from "react-redux"

const TransactionList = ({ transactions }) => (
    <>
        <h3>History</h3>
        <ul className="list">
            {transactions.length ? transactions.map((t, i) => (
                <Transaction transaction={t} key={i} />
            )) : 'Here is empty'}
        </ul>
    </>
)

export default connect(state => ({ transactions: state.transactions }))(TransactionList)