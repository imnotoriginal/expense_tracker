import React from 'react'
import { connect } from "react-redux"

const IncExp = ({ income, expence}) => (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
            <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
            <p className="money minus">-${expence}</p>
        </div>
      </div>
)

export default connect(state => ({income: state.balance.income, expence: state.balance.expence}))(IncExp);