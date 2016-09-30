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
        <button onClick={this.increaseStage.bind(this)}>Insert</button>
      </div>
    )
  }
}
