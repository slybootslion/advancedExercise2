import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Button } from "antd";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const ContainerDiv = styled.div`
  .transition-content {
    padding: 10px;
    margin-bottom: 10px;

    .transition-btn {
      color: #ffffff;
      background-color: #c00;
      margin-bottom: 10px;
    }

    .btn-switch-enter {
      opacity: 0;
      transform: translate(100%);
    }

    .btn-switch-enter-active {
      opacity: 1;
      transform: translate(0);
      transition: all 1s;
    }

    .btn-switch-exit {
      opacity: 1;
      transform: translate(0);
    }

    .btn-switch-exit-active {
      opacity: 0;
      transform: translate(-100%);
      transition: all 1s;
    }
  }
`

class SwitchTransitionComp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      isOn: true
    }
  }

  render () {
    const { isOn } = this.state

    return (
      <ContainerDiv>
        <div>Switch Transition</div>
        <div className='transition-content'>
          <SwitchTransition mode='out-in'>
            <CSSTransition key={isOn ? 'on' : 'off'}
                           className={'transition-btn'}
                           classNames={'btn-switch'}
                           timeout={1000}>
              <Button onClick={() => this.run()}>
                {isOn ? 'on' : 'off'}
              </Button>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </ContainerDiv>
    );
  }

  run () {
    const { isOn } = this.state
    this.setState({ isOn: !isOn })
  }
}

export default SwitchTransitionComp;
