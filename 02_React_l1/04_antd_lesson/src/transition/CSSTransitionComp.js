import React, { PureComponent } from 'react';
import { Button } from 'antd'
import { CSSTransition } from "react-transition-group";
import CardTemplate from "./CardTemplate";
import styled from "styled-components";

const ContainerDiv = styled.div`
  .transition-content {
    padding: 10px;
    margin-bottom: 10px;

    .transition-btn {
      color: #ffffff;
      background-color: #c00;
      margin-bottom: 10px;
    }

    .card-enter,
    .card-appear {
      transform: scale(.6);
      opacity: 0;
    }

    .card-enter-active,
    .card-appear-active {
      opacity: 1;
      transform: scale(1);
      transition: all .3s;
    }

    .card-enter-done,
    .card-appear-done {
      transform: scale(1);
      opacity: 1;
    }

    .card-exit {
      transform: scale(1);
      opacity: 1;
    }

    .card-exit-active {
      opacity: 0;
      transform: scale(.6);
      transition: all .3s;
    }

    .card-exit-done {
      opacity: 0;
      transform: scale(.6);
    }
  }
`

class CssTransitionComp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      isShow: true
    }
  }


  render () {
    const { isShow } = this.state

    return (
      <ContainerDiv>
        <div>CSS Transition</div>
        <div className='transition-content'>
          <Button className='transition-btn'
                  onClick={() => this.setState({ isShow: !isShow })}>
            toggle card show
          </Button>
          <CSSTransition in={isShow}
                         timeout={300}
                         classNames='card'
                         appear
                         unmountOnExit>
            <CardTemplate/>
          </CSSTransition>
        </div>
      </ContainerDiv>
    )
  }
}

export default CssTransitionComp;
