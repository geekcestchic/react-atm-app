import React from 'react'

export default class TakeYourMoney extends React.Component {
  render () {
    return (
      <div>
        <p>Please take your cash...</p>
        <p>Amount: {this.state.amount}</p>
      </div>
    )
  }
}
