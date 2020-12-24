import { Map } from 'immutable'
import * as actionType from './constants'

const defaultState = Map({
  banner: [],
})

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_BANNER:
      return state.set('banner', action.banner)
    default:
      return state
  }
}

export default reducer
