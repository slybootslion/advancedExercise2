import React, { useState } from 'react'
import { Button } from "antd";

export default function CountHook () {
  const [state, setState] = useState({ count: 0 })

  return (
    <>
      <h2 className='content'>{state.count}</h2>
      <Button className='btn'
              onClick={() => setState({ count: state.count + 1 })}>
        +1
      </Button>
      <Button className='btn'
              onClick={() => setState({ count: state.count - 1 })}>
        -1
      </Button>
    </>
  )
}
