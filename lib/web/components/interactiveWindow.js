import React from 'react'
import WelcomeScreen from './welcomeScreen'
import Pinpad from './pinpad'
import Amount from './amount'
import TakeYourMoney from './takeYourMoney'
import { connect } from 'react-redux'
import { increaseStage, resetStage, selectAmount } from '../actions'

const mapStateToProps = (state) => ({
  stage: state.atm.get('stage')
})

const mapDispatchToProps = ({
  update: increaseStage,
  reset: resetStage,
  selectAmount
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
    if (stage === 1) innerComponent = <WelcomeScreen stage={stage} update={this.props.update}/>
    else if (stage === 2) innerComponent = <Pinpad stage={stage} update={this.props.update}/>
    else if (stage === 3) innerComponent = <Amount stage={stage} onAmountSelect={this.props.selectAmount}/>
    else if (stage === 4) innerComponent = <TakeYourMoney stage={stage}/>
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
