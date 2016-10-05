import Immutable from 'immutable'

const ATMState = Immutable.Record({
  stage: 1
})

const atm = (state = new ATMState(), action) => {
  switch (action.type) {
    case 'INCREASE_STAGE':
      return state.update('stage', (n) => n + 1)
    case 'RESET_STAGE':
      return state.set('stage', 1)
    default:
      return state
  }
}

export default atm
