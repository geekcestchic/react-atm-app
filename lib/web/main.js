import React from 'react'
import ReactDOM from 'react-dom'
import InteractiveWindow from './components/interactiveWindow'

const { PropTypes } = React

class App extends React.Component {
  handleStageUpdate () {
    const { stage } = this.state
    this.setState({
      stage: stage + 1
    })
  }

  render () {
    return (
      <div className="content-wrapper">
        <h1 className="header">ATM APP</h1>
        <InteractiveWindow onStateUpdate={this.handleStageUpdate.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)
