import React,{useState} from 'react'

export default function DtnuseState() {
    // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
  const [list,setList]=useState([1,5]);
  const dtnHandleList = ()=>{
    let num = parseInt(Math.random()*100);
    setList([
       ...list,
       num
    ])
    //let lst = list.push(num);
    //setList(lst);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
        <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={dtnHandleList}>them ngau nhien</button>
    </div>
  )
}
