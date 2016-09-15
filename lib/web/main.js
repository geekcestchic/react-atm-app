import React from 'react'
import ReactDOM from 'react-dom'

const PropTypes = React.PropTypes

class WelcomeScreen extends React.Component {
  increaseStage () {
    // debugger
    // console.log()
    // this.setState({
    //   stage: this.state.stage + 1
    // })
  }

  render () {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>Please insert your card</p>
        <button onClick={this.increaseStage()}>Insert</button>
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
  // getInitialState () {
  //   return {
  //     stage: 1
  //   }
  // }

  currentWindow (props) {
    var innerComponent
    debugger
    var stage = this.props.stage
    if (stage === 1) innerComponent = <WelcomeScreen/>
    else if (stage === 2) innerComponent = <Pinpad/>
    else if (stage === 3) innerComponent = <Amount/>
    else if (stage === 4) innerComponent = <TakeYourMoney/>
    return innerComponent
  }

  render () {
    return (
      <div className="content-window">
        {this.currentWindow()}
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
  handleStageUpdate (this) {
    // debugger
    // console.log('app component')
    // this.setState({
    //   stage: stage + 1
    // })
  }

  render () {
    return (
      <div className="content-wrapper">
        <h1 className="header">ATM APP</h1>
        <InteractiveWindow stage={1} onStateUpdate={this.handleStageUpdate(this)}/>
        <BackToStart/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)
