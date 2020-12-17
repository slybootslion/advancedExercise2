import React, { PureComponent, createRef } from 'react';

class RefComponet extends PureComponent {
  constructor (props) {
    super(props);
    this.ref2 = createRef()
    this.ref3 = null
  }

  render () {
    return (
      <div>
        {/*<h2 ref='ref1'>ref 1</h2>*/}
        {/*<button onClick={() => this.change1()}>change ref 1</button>*/}
        <h2 ref={this.ref2}>ref 2</h2>
        <button onClick={() => this.change2()}>change ref 2</button>
        <h2 ref={el => this.ref3 = el}>ref 3</h2>
        <button onClick={() => this.change3()}>change ref 3</button>
      </div>
    );
  }

  change1 () {
    this.refs.ref1.innerHTML = 'change ref 1'
  }

  change2 () {
    const { current } = this.ref2
    current.innerHTML = 'change ref 2'
  }

  change3 () {
    this.ref3.innerHTML = 'change ref 3'
  }
}

export default RefComponet;
