import React from 'react'
import WelcomeScreen from './welcomeScreen'
import Pinpad from './pinpad'
import Amount from './amount'
import TakeYourMoney from './takeYourMoney'
import { connect } from 'react-redux'
import { increaseStage, resetStage } from '../actions'

const mapStateToProps = (state) => ({
  stage: state.atm.get('stage')
})

const mapDispatchToProps = ({
  onUpdate: increaseStage,
  onReset: resetStage
})

function BackToStart (props) {
  return <button>Back to start</button>
}

 class InteractiveWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {stage: 1, amountWithdrawn: 0}
  }

  currentWindow () {
    var innerComponent
    var stage = this.props.stage
    if (stage === 1) innerComponent = <WelcomeScreen stage={stage} onUpdate={this.props.onUpdate}/>
    else if (stage === 2) innerComponent = <Pinpad stage={stage} onUpdate={this.props.onUpdate}/>
    else if (stage === 3) innerComponent = <Amount stage={stage} onUpdate={this.props.onUpdate}/>
    else if (stage === 4) innerComponent = <TakeYourMoney stage={stage} amount={this.state.amountWithdrawn}/>
    return innerComponent
  }

  render () {
    return (
      <div className="content-window">
        {this.currentWindow()}
        <BackToStart onClick={this.props.reset}/>
      </div>
    )
  }
}
const connectedWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractiveWindow)

export default connectedWindow
