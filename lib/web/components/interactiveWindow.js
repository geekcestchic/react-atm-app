import React from 'react'
import WelcomeScreen from './welcomeScreen'
import Pinpad from './pinpad'
import Amount from './amount'
import TakeYourMoney from './takeYourMoney'

class BackToStart extends React.Component {
  backToFirstScreen () {
    this.props.onInteract(1)
  }
  render () {
    return <button onClick={this.backToFirstScreen.bind(this)}>Back to start</button>
  }
}

export default class InteractiveWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {stage: 1, amountWithdrawn: 0}
  }

  handleStageUpdate (updatedStage, amountWithdrawn) {
    if (amountWithdrawn) {
      this.setState({
        stage: updatedStage,
        amountWithdrawn: amountWithdrawn
      })
    } else {
      this.setState({
        stage: updatedStage
      })
    }

  }

  currentWindow () {
    var innerComponent
    var stage = this.state.stage
    if (stage === 1) innerComponent = <WelcomeScreen stage={stage} onUpdate={this.handleStageUpdate.bind(this)}/>
    else if (stage === 2) innerComponent = <Pinpad stage={stage} onUpdate={this.handleStageUpdate.bind(this)}/>
    else if (stage === 3) innerComponent = <Amount stage={stage} onUpdate={this.handleStageUpdate.bind(this)}/>
    else if (stage === 4) innerComponent = <TakeYourMoney stage={stage} amount={this.state.amountWithdrawn}/>
    return innerComponent
  }

  render () {
    // if (this.state.stage > 1) {
      return (
        <div className="content-window">
          {this.currentWindow()}
          <BackToStart onInteract={this.handleStageUpdate.bind(this)}/>
        </div>
      )
    // } else return {
    //   <div className="content-window">
    //     {this.currentWindow()}
    //   </div>
    // }
  }
}
