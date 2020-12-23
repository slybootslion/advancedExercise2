import { useState } from 'react'
import CountClass from "./components/CountClass";
import styled from 'styled-components'
import CountHook from "./components/CountHook";
import EffectHookComp from "./components/EffectHookComp";
import { Button } from "antd";

const ContainerDiv = styled.div`

  .content {
    margin: 0 10px 20px;
  }

  .btn {
    margin: 0 10px;
    color: #ffffff;
    background-color: #c00;
  }
`

export default function App () {
  const [show, setShow] = useState(true)

  return (
    <ContainerDiv>
      <p>-----class component-----</p>
      <CountClass/>
      <p>-----hook component-----</p>
      <CountHook/>
      <p>-----effect hook-----</p>
      <Button className='btn' onClick={() => setShow(!show)}>切换</Button>
      {show && <EffectHookComp/>}
    </ContainerDiv>
  )
}
