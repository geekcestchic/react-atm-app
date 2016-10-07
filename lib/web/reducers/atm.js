import Immutable from 'immutable'

const ATMState = Immutable.Record({
  stage: 1,
  amountWithdrawn: 0
})

const atm = (state = new ATMState(), action) => {
  switch (action.type) {
    case 'INCREASE_STAGE':
      return state.update('stage', (n) => n + 1)
    case 'RESET_STAGE':
      return state.set('stage', 1)
    case 'WITHDRAW':
      debugger
      return state.update('amountWithdrawn', () => state.get('amountWithdrawn'))
    default:
      return state
  }
}

export default atm
