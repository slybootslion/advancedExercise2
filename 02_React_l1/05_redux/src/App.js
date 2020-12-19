import React, { PureComponent } from 'react';
import Home from "./components/Home";
import About from "./components/About";
import styled from "styled-components";
import ShopPage from "./components/ShopPage";

const ContainerDiv = styled.div`
  .btn {
    background-color: #c00;
    color: #ffffff;
    margin: 5px;
  }
`

class App extends PureComponent {
  render () {
    return (
      <ContainerDiv>
        <p>--redux count--</p>
        <Home/>
        <About/>
        <p>--redux shop--</p>
        <ShopPage/>
      </ContainerDiv>
    );
  }
}

export default App;
