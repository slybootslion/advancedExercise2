import { updateQueue } from './Component'

// 兼容处理 + 装饰器
export function addEvent (dom, eventType, listener) {
  const store = dom.store || (dom.store = {})
  store[eventType] = listener
  if (!document[eventType]) {
    document[eventType] = dispatchEvent
  }
}

let syntheticEvent = {
  stopping: false,
  stop() {
    this.stopping = true
  }
}

function createSyntheticEvent (e) {
  for (const eKey in e) {
    if (e.hasOwnProperty(eKey)) {
      syntheticEvent[eKey] = e[eKey]
    }
  }
}

function dispatchEvent (e) {
  let { target, type } = e
  let eventType = `on${type}`
  updateQueue.isBatchingUpdate = true
  createSyntheticEvent(e)
  while (target) {
    const { store } = target
    const listener = store && store[eventType]
    listener && listener.call(target, syntheticEvent)
    if (syntheticEvent.stopping) break
    target = target.parentNode
  }
  for (const key in syntheticEvent) {
    syntheticEvent[key] = null
  }
  updateQueue.batchUpdate()
  updateQueue.isBatchingUpdate = false
}
