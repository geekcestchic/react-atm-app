import React from 'react'

class ValueButton extends React.Component {
  chooseValue () {
    debugger
    this.props.onAmountSelect(this.props.value)
    debugger
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
            <ValueButton value={20} onAmountSelect={this.props.onAmountSelect}/>
            <ValueButton value={40} onAmountSelect={this.props.onAmountSelect}/>
            <ValueButton value={60} onAmountSelect={this.props.onAmountSelect}/>
          </div>
          <div className="column column-2">
            <ValueButton value={80} onAmountSelect={this.props.onAmountSelect}/>
            <ValueButton value={100} onAmountSelect={this.props.onAmountSelect}/>
            <ValueButton value={200} onAmountSelect={this.props.onAmountSelect}/>
          </div>
          <div className="other-amount">Other amount</div>
        </div>
      </div>
    )
  }
}
