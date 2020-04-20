import React from 'react'
import Header from "./Header"
import Balance from "./Balance"
import IncExp from "./IncExp"
import TransactionList from "./TransactionList"
import AddTransaction from "./AddTransaction"
import '../App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <TransactionList />
        <AddTransaction/>
      </div>
    </>
  );
}

export default App;
