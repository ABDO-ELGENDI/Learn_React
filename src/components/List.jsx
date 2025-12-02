import { useEffect, useState } from 'react'
import React from 'react';


function List(props) {
  const [col, setCol] = useState('black');
  const [count, setCount] = useState(0);
  //const changeCol=(event)=>{setCol(event.target.value)}
  const changeCol=(event)=>{setCol(event.target.value)};
  useEffect(()=>{
    setCount(count+1);
  },[col]);

  useEffect(()=>{
    const fetchDAta=async ()=>{
      const response=await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData=await response.json();
      console.log(jsonData[0]['userId']);
    }
    fetchDAta();
  },[col]);
  return (
    <div>
      <h1>Test Component</h1>
      <ul style={{ color: col }}>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Given {props.given}</li>
      </ul>
      <label htmlFor="cols">Choose a car:</label>

      {/* <select name="cols" id="cols" onChange={(event) => { setCol(event.target.value) }}> */}
        <select name="cols" id="cols" onChange={changeCol}>
        <option value="red">RED</option>
        <option value="green">GREEN</option>
        <option value="blue">BLUE</option>
        <option value="yellow">YELLOW</option>
      </select>
      <button onClick={() => setCol((col) => col = 'red')}>Change color to red</button>
      <label>Count is : {count}</label>
    </div>
  )
}

export default List
