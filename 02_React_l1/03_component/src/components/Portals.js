import React, { PureComponent } from 'react';
import Modal from "./Modal";

class Portals extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      isShow: false
    }
  }

  render () {
    const { isShow } = this.state
    const btn = <button onClick={() => this.toggle()}>toggle model</button>
    return (
      <div>
        portals
        {btn}
        <Modal>
          <div className='modal' style={{ display: (isShow ? 'flex' : 'none') }}>
            <h2>标题</h2>
            <p>内容</p>
            {btn}
          </div>
        </Modal>
      </div>
    );
  }

  toggle () {
    const { isShow } = this.state
    this.setState({
      isShow: !isShow
    })
  }
}

export default Portals;
