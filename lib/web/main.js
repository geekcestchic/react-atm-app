import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const PropTypes = React.PropTypes

class WelcomeScreen extends React.Component {
  increaseStage () {
    debugger
  }

  render () {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>Please insert your card</p>
        <button onClick={this.increaseStage}>Insert</button>
      </div>
    )
  }
}

class Pinpad extends React.Component {
  render () {
    
  }
}

class Amount extends React.Component {
  render () {
    
  }
}

class TakeYourMoney extends React.Component {
  render () {
    
  }
}

class BackToStart extends React.Component {
  backToFirstScreen () {

  }
  render () {
    return <button onClick={this.backToFirstScreen}>Back to start</button>
  }
}

class InteractiveWindow extends React.Component {

  currentWindow (props) {
    var innerComponent
    var stage = props.stage
    if (stage === 1) innerComponent = <WelcomeScreen/>
    else if (stage === 2) innerComponent = <Pinpad/>
    else if (stage === 3) innerComponent = <Amount/>
    else if (stage === 4) innerComponent = <TakeYourMoney/>
    return innerComponent
  }

  render () {
    return (
      <div className="content-window">
        {this.currentWindow(this.props)}
      </div>
    )
  }
}

InteractiveWindow.getDefaultProps = {
  stage: 1  
}

InteractiveWindow.propTypes = {
  stage: PropTypes.number.isRequired
}

class App extends React.Component {
  handleStageUpdate (stage) {
    this.setState({
      stage: stage
    })
  }

  render () {
    return (
      <div className="content-wrapper">
        <h1 className="header">ATM APP</h1>
        <InteractiveWindow stage={1} handleStage={this.handleStageUpdate}/>
        <BackToStart/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)