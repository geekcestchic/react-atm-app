import React from 'react'
import ReactDOM from 'react-dom'
import InteractiveWindow from './components/interactiveWindow'

const PropTypes = React.PropTypes

class App extends React.Component {
  render () {
    return (
      <div className="content-wrapper">
        <h1 className="header">ATM APP</h1>
        <InteractiveWindow />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)
