const redux = require('redux')

const initState = {
  count: 0
}

// reducer
function reducer (state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'ADD_NUMBER':
      return { ...state, count: state.count + action.num }
    case 'SUB_NUMBER':
      return { ...state, count: state.count - action.num }
    default:
      return state
  }
}

// store
const store = redux.createStore(reducer)

// action
const actions1 = { type: 'INCREMENT' }
const actions2 = { type: 'DECREMENT' }
const actions3 = { type: 'ADD_NUMBER', num: 5 }
const actions4 = { type: 'SUB_NUMBER', num: 5 }

store.subscribe(() => {
  console.log('store change:', store.getState().count)
})

// dispatch
store.dispatch(actions1)
store.dispatch(actions2)
store.dispatch(actions2)
store.dispatch(actions3)
store.dispatch(actions4)
