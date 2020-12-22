import { ADD_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND, SUB_NUMBER } from "./constants.js";
import { combineReducers } from 'redux'
// const initState = {
//   count: 0,
//   banner: [],
//   recommend: []
// }

function numReducer (state = { count: 0 }, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num }
    default:
      return state
  }
}

function pageReducer (state = { banner: [], recommend: [] }, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banner: action.banner }
    case CHANGE_RECOMMEND:
      return { ...state, recommend: action.recommend }
    default:
      return state
  }
}

// function reducer (state = {}, action) {
//   return {
//     numInfo: numReducer(state.numInfo, action),
//     pageInfo: pageReducer(state.pageInfo, action),
//   }
// }

const reducer = combineReducers({
  numInfo: numReducer,
  pageInfo: pageReducer,
})

export default reducer
