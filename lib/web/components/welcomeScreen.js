import React from 'react'

export default class WelcomeScreen extends React.Component {
  increaseStage () {
    this.props.onUpdate(this.props.stage + 1)
  }

  render () {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>Please insert your card</p>
        <button onClick={this.props.update}>Insert</button>
      </div>
    )
  }
}
