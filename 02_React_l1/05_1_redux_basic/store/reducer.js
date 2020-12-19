import { ADD_NUMBER, SUB_NUMBER } from "./constants.js";

const initState = {
  count: 0
}

function reducer (state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num }
    default:
      return state
  }
}

export default reducer
