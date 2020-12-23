import React, { useState, useEffect } from 'react'
import { Button } from "antd";

export default function EffectHookComp () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count.toString()
  }, [count])

  useEffect(() => {
    console.log('绑定事件')
    return () => console.log('解除绑定')
  }, [])

  return (
    <>
      <h2>count：{count}</h2>
      <Button className='btn' onClick={() => setCount(count + 1)}>+1</Button>
    </>
  )
}
