import { useState } from 'react'


function Button(props) {
  const [col,setCol] =useState('black')
  return (
      <button type='button'>Change to {props.col}</button>
  )
}

export default Button
