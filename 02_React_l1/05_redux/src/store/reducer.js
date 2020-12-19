import { ADD_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND, SUB_NUMBER } from "./constants.js";

const initState = {
  count: 0,
  banner: [],
  recommend: []
}

function reducer (state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num }
    case CHANGE_BANNER:
      return { ...state, banner: action.banner }
    case CHANGE_RECOMMEND:
      return { ...state, recommend: action.recommend }
    default:
      return state
  }
}

export default reducer
