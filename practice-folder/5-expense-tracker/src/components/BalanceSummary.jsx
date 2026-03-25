import React from 'react'

const BalanceSummary = () => {
  return (
    <div className="balance-summary">
        <div className="balance border">
          <p>Total Balance</p>
          <p>$490</p>
        </div>
        <div className="income border">
          <p>Total Income</p>
          <p>$500</p>
        </div>
        <div className="expense border">
          <p>Total expense</p>
          <p>$10</p>
        </div>
      </div>
  )
}

export default BalanceSummary
