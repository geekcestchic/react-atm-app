import React from 'react'

export default class Pinpad extends React.Component {
  handlePinChange (e) {
    this.setState({ pin: e.target.value })
  }

  checkCode (e) {
    e.preventDefault()
    if (this.state.pin === '1234') {
      this.props.update()
    } else {
      //add error message
    }
  }

  render () {
    return (
      <div>
        <p>Please input your NIP</p>
        <form onSubmit={this.checkCode.bind(this)}>
          <input type="password" value={this.props.value} onChange={this.handlePinChange.bind(this)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
