import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Button } from "antd";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContainerDiv = styled.div`
  .transition-content {
    padding: 10px;
    margin-bottom: 10px;

    .transition-btn {
      color: #ffffff;
      background-color: #c00;
      margin-bottom: 10px;
    }

    .item-enter {
      transform: scale(.6);
      opacity: 0;
    }

    .item-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: all .3s;
    }

    .item-enter-done {
      color: #000;
      transform: scale(1);
      opacity: 1;
    }

    .item-exit {
      transform: scale(1);
      opacity: 1;
    }

    .item-exit-active {
      opacity: 0;
      transform: scale(.6);
      transition: all .3s;
    }

    .item-exit-done {
      opacity: 0;
      transform: scale(.6);
    }
  }
`

class TransitionGroupComp extends PureComponent {
  constructor (props) {
    super(props);
    this.index = 10
    this.state = {
      names: ['name1', 'name2', 'name3']
    }
  }

  render () {
    return (
      <ContainerDiv>
        <div>Transition Group</div>
        <div className='transition-content'>
          <TransitionGroup>
            {
              this.state.names.map(name => {
                return (
                  <CSSTransition key={name}
                                 timeout={300}
                                 classNames={'item'}>
                    <div>
                      {name} <Button onClick={() => this.remove(name)}>del</Button>
                    </div>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
          <Button className={'transition-btn'}
                  onClick={() => this.add()}>
            add name
          </Button>
        </div>
      </ContainerDiv>
    );
  }

  remove (value) {
    this.setState({
      names: this.state.names.filter(name => name !== value)
    })
  }

  add () {
    const names = [...this.state.names]
    const index = this.index++
    names.push(`name${index}`)
    this.setState({ names })
  }
}

export default TransitionGroupComp;
