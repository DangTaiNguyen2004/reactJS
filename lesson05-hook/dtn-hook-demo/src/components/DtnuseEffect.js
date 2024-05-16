import React, { useEffect, useState } from 'react'

export default function DtnuseEffect() {
    const [count, setCount] = useState(0);
    const dtnHandleClick = ()=>{
        setCount(prev => prev + 1);
    }
    useEffect(()=>{
        document.title = `Dang Tai Nguyen: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    useEffect(()=>{
        console.log("chay lan dau tien - mot lan")
    },[])
    useEffect(()=>{
        console.log(`useEffect count click: `,count)
    },[count])
  return (
    <div>
      <h2>demo - useEffect :You clicked {count} times</h2>
      <button onClick={dtnHandleClick}>
        Click me
      </button>
    </div>
  )
}
