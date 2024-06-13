/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.css";
export default function Input({ placeholder = "", onInput = () => {} }) {
  const [value, setValue] = useState('')
  function handleInput(e) {
    setValue(e.target.value)
    onInput(e.target.value);
  }
  return (
    <input
      type="number"
      className="main-input"
      value={value}
      placeholder={placeholder}
      onInput={handleInput}
    />
  );
}
