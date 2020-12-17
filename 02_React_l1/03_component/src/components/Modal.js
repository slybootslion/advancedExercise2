import { PureComponent } from 'react';
import { createPortal } from 'react-dom'

class Modal extends PureComponent {
  render () {
    return createPortal(this.props.children, document.getElementById('portals'))
  }
}

export default Modal;
