import * as actionType from './constants'

const defaultState = {
  banner: [],

}

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_BANNER:
      return { ...state, banner: [] }
    default:
      return state
  }
}

export default reducer
