import { createDOM } from './react-dom'

export default class Component {
  static isReactComponent = true

  constructor (props) {
    this.props = props
    this.state = {}
  }

  setState (state) {
    this.state = {
      ...this.state,
      ...state
    }
    // 父类能不能调用子类实例？？？？？
    const vDom = this.render()
    updateClassComponent(this, vDom)
  }
}

function updateClassComponent (instance, vDom) {
  const oldDom = instance.dom
  const newDom = createDOM(vDom)
  oldDom.parentNode.replaceChild(newDom, oldDom)
  instance.dom = newDom
}
