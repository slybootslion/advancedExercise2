function render (vdom, container) {
  const dom = createDOM(vdom)
  container.appendChild(dom)
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
  updateProps(dom, props)
  if (typeof props.children === 'string' || typeof props.children === 'number') {
    dom.textContent = props.children
  } else if (typeof props.children === 'object' && props.children.type) {
    render(props.children, dom)
  } else if (Array.isArray(props.children)) {
    reconcileChildren(props.children, dom)
  } else {
    document.textContent = props.children ? props.children.toString() : ""
  }
  // vdom.dom = dom
  return dom
}

function mountClassComponent (vdom) {
  const { type, props } = vdom
  const classInstance = new type(props)
  const renderVDom = classInstance.render()
  const dom = createDOM(renderVDom)
  classInstance.dom = dom
  return dom
}

function mountFunctionComponent (vdom) {
  const { type: functionComponent, props } = vdom
  const renderVDom = functionComponent(props)
  return createDOM(renderVDom)
}

function reconcileChildren (childrenVDom, parentDOM) {
  for (let i = 0; i < childrenVDom.length; i++) {
    const childVdom = childrenVDom[i]
    render(childVdom, parentDOM)
  }
}

function updateProps (dom, props) {
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
        dom[propsKey.toLocaleLowerCase()] = props[propsKey]
      } else {
        dom[propsKey] = props[propsKey]
      }
    }
  }
}

const ReactDOM = { render }
export default ReactDOM
