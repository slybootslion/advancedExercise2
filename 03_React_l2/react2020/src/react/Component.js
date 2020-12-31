import { createDOM } from './react-dom'

export const updateQueue = {
  isBatchingUpdate: false,
  updaters: new Set(),
  batchUpdate () {
    for (const updater of this.updaters) {
      updater.updateComponent()
    }
    this.isBatchingUpdate = false
  }
}

export class Updater {
  constructor (instance) {
    this.instance = instance
    this.pendingStates = []
    this.callbacks = []
  }

  addState (state, callback) {
    this.pendingStates.push(state)
    if (typeof callback === 'function') this.callbacks.push(callback)
    this.emitUpdate()
  }

  updateComponent () {
    const { instance, pendingStates, callbacks } = this
    if (pendingStates.length) {
      // instance.state = this.getState()
      // instance.forceUpdate()
      // callbacks.forEach(cb => cb())
      // this.callbacks.length = 0
      shouldUpdate(instance, this.getState())
      callbacks.forEach(cb => cb())
      this.callbacks.length = 0
    }
  }

  getState () {
    const { instance, pendingStates } = this
    let state = instance.state
    pendingStates.forEach(s => {
      if (typeof s === 'function') s = s.call(instance, state)
      state = { ...state, ...s }
    })
    this.pendingStates.length = 0
    return state
  }

  emitUpdate (props) {
    if (updateQueue.isBatchingUpdate)
      updateQueue.updaters.add(this)
    else
      this.updateComponent()
  }
}

export default class Component {
  static isReactComponent = true

  constructor (props) {
    this.props = props
    this.state = {}
    this.updater = new Updater(this)
  }

  setState (state, callback) {
    this.updater.addState(state, callback)
  }

  forceUpdate () {
    if (this.componentWillUpdate) this.componentWillUpdate()
    // 父类调用子类实例方法？？？？？
    const vDom = this.render()
    updateClassComponent(this, vDom)
    if (this.componentDidUpdate) this.componentDidUpdate()
  }
}


function updateClassComponent (instance, vDom) {
  const oldDom = instance.dom
  const newDom = createDOM(vDom)
  oldDom.parentNode.replaceChild(newDom, oldDom)
  instance.dom = newDom
}

function shouldUpdate (instance, state) {
  instance.state = state
  if (instance.shouldComponentUpdate && !instance.shouldComponentUpdate(instance.props, state)) return
  instance.forceUpdate()
}
