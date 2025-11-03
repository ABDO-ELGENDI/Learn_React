import { useState } from 'react'


function List(props) {
  return (
      <div>
        <h1>Test Component</h1>
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Given {props.given}</li>
        </ul>
      </div>
  )
}

export default List
