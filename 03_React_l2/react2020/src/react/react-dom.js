import { addEvent } from './event'

function render (vdom, container) {
  const dom = createDOM(vdom)
  container.appendChild(dom)
  dom.componentDidMount && dom.componentDidMount()
}

export function createDOM (vdom) {
  if (typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom)
  }
  const { type, props } = vdom
  let dom
  if (typeof type === 'function') {
    if (type.isReactComponent) {
      return mountClassComponent(vdom)
    }
    return mountFunctionComponent(vdom)
  } else {
    dom = document.createElement(type)
  }
  updateProps(dom, {}, props)
  if (typeof props.children === 'string' || typeof props.children === 'number') {
    dom.textContent = props.children
  } else if (typeof props.children === 'object' && props.children.type) {
    render(props.children, dom)
  } else if (Array.isArray(props.children)) {
    reconcileChildren(props.children, dom)
  } else {
    document.textContent = props.children ? props.children.toString() : ""
  }
  vdom.dom = dom
  return dom
}

function mountClassComponent (vdom) {
  const { type, props } = vdom
  const classInstance = new type(props)
  vdom.classInstance = classInstance
  if (classInstance.componentWillMount) {
    classInstance.componentWillMount()
  }
  const renderVDom = classInstance.render()
  vdom.oldVDom = renderVDom
  const dom = createDOM(renderVDom)
  if (classInstance.componentDidMount) {
    dom.componentDidMount = classInstance.componentDidMount.bind(classInstance)
  }
  classInstance.dom = dom
  return dom
}

function mountFunctionComponent (vdom) {
  const { type: functionComponent, props } = vdom
  const renderVDom = functionComponent(props)
  console.log(vdom)
  vdom.oldVDom = renderVDom
  return createDOM(renderVDom)
}

function reconcileChildren (childrenVDom, parentDOM) {
  for (let i = 0; i < childrenVDom.length; i++) {
    const childVdom = childrenVDom[i]
    render(childVdom, parentDOM)
  }
}

function updateProps (dom, oldProps, props) {
  for (const propsKey in props) {
    if (props.hasOwnProperty(propsKey)) {
      if (propsKey === 'children') continue
      if (propsKey === 'style') {
        const styleObj = props.style
        for (const attr in styleObj) {
          if (styleObj.hasOwnProperty(attr)) {
            dom.style[attr] = styleObj[attr]
          }
        }
      } else if (propsKey.startsWith('on')) {
        // 真实dom加属性
        // dom[propsKey.toLocaleLowerCase()] = props[propsKey]
        addEvent(dom, propsKey.toLocaleLowerCase(), props[propsKey])
      } else {
        dom[propsKey] = props[propsKey]
      }
    }
  }
}

export function compareTowVDom (parentNode, oldVDom, newVDom, nextDom) {
  if (!oldVDom && !newVDom) return null

  if (oldVDom && !newVDom) {
    const currentDOM = findVDom(oldVDom)
    if (currentDOM) {
      parentNode.removeChild(currentDOM)
    }
    if (oldVDom.classInstance && oldVDom.classInstance.componentWillUnmount) {
      oldVDom.classInstance.componentWillUnmount()
    }
    return null
  }

  if (!oldVDom && newVDom) {
    const dom = createDOM(newVDom)
    if (nextDom) {
      parentNode.insertBefore(nextDom)
    } else {
      parentNode.appendChild(dom)
    }
    return newVDom
  }

  if (oldVDom && newVDom && (oldVDom.type !== newVDom.type)) {
    const oldDom = findVDom(oldVDom)
    const newDom = createDOM(newVDom)
    parentNode.replaceChild(newDom, oldDom)
    if (oldVDom.classInstance && oldVDom.classInstance.componentWillUnmount) {
      oldVDom.classInstance.componentWillUnmount()
    }
    return newVDom
  }

  // 深度dom diff（更新属性，比较子节点）
  updateElement(oldVDom, newVDom)
  return newVDom
}

function updateElement (oldVDom, newVDom) {
  if (typeof oldVDom.type === 'string') {
    const currentDOM = newVDom.dom = oldVDom.dom
    updateProps(currentDOM, oldVDom.props, newVDom.props)
  }
}

function findVDom (vDom) {
  const { type } = vDom
  let dom
  if (typeof type === 'function') {
    /*    if (type.isReactComponent) {
          dom = findVDom(vDom.classInstance.oldVDom)
        } else {
          dom = findVDom(vDom.oldVDom)
        }*/
    dom = findVDom(vDom.oldVDom)
  } else {
    dom = vDom.dom
  }
  return dom
}

const ReactDOM = { render }
export default ReactDOM
