/* eslint-disable react/prop-types */
import { useState } from 'react'
import './style.css'
export default function Input({placeholder='',onInput=()=>{}}) {
  const [inputBox, setInputBox] = useState('')
  function handleInput(e){
  onInput(e.target.value)
  setInputBox()
  }
  return (
<input type="number" value={inputBox} className='main-input' placeholder={placeholder} onInput={handleInput}  />
  )
}