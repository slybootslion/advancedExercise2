import store from './store/index.js'
import { addAction, subAction } from "./store/actions.js";

store.subscribe(() => {
  console.log(store.getState().count)
})

store.dispatch(addAction(5))
store.dispatch(subAction(5))
