import { useState } from 'react';

export default function Demo(props) {
  const [msg, setMsg] = useState('Hi, I am Demo, nice to meet you!')
  let { info } = props
  return (
    <div style={{border: '1px solid blue'}}>
      <h2>{msg}</h2>
      <p>The message I received is:
        <strong style={{color: 'red'}}> {info}</strong>
      </p>
    </div>
  )
}