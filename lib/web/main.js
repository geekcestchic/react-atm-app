import React from 'react'
import { render } from 'react-dom'
import InteractiveWindow from './components/interactiveWindow'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const { PropTypes } = React
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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

render(
  <Provider store={store}>
    <App/>
  </Provider>,
	document.getElementById('mount')
)
