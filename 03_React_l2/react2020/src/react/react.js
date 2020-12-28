function createElement (type, config, children) {
  const props = config
  if (arguments.length > 4) {
    children = Array.prototype.slice.call(arguments, 2)
  }
  props.children = children
  return {
    type, children
  }
}

const React = { createElement }

export default React
