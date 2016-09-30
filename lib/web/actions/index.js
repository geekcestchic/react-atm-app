import Immutable from 'immutable'

export const increaseStage = (stage) => ({
  type: 'INCREMENT_STAGE'
})

export const resetStage = (stage) => ({
  type: 'RESET_STAGE'
})
