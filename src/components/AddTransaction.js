import React, { useState } from 'react'
import { connect } from "react-redux"
import { addTransaction } from "../state/actions"

const AddTransaction = ({ dispatch }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        if (text.length && amount !== "") {
            dispatch(addTransaction({text, amount}))
            setAmount('');
            setText('');
        }
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default connect()(AddTransaction)