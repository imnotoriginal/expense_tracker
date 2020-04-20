import React from 'react'
import { connect } from "react-redux"

const Balance = ({ amount }) => (
    <>
        <h4>Your Balance</h4>
        <h1>{amount < 0 ? "-" : null}${amount < 0 ? (amount * -1) : amount}</h1>
    </>
)

export default connect(state => ({amount: state.balance.amount }))(Balance);