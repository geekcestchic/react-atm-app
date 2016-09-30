import React from 'react'

class ValueButton extends React.Component {
  chooseValue () {
    // this will update the state of InteractiveWindow with stage 4, and amountWithdrawn = this.props.value
    
  }

  render () {
    return <div className="amount-value" value={this.props.value} onClick={this.chooseValue.bind(this)}>£{this.props.value}</div>
  }
}

export default class Amount extends React.Component {
  render () {
    return (
      <div>
        <p>Please select amount:</p>
        <div>
          <div className="column column-1">
            <ValueButton value={20}/>
            <ValueButton value={40}/>
            <ValueButton value={60}/>
          </div>
          <div className="column column-2">
            <ValueButton value={80}/>
            <ValueButton value={100}/>
            <ValueButton value={200}/>
          </div>
          <div className="other-amount">Other amount</div>
        </div>
      </div>
    )
  }
}
