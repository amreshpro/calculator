/* eslint-disable react/prop-types */

import "./style.css";
export default function Input({ placeholder = "", value, onInput = () => {} }) {
  function handleInput(e) {
    console.log(e.key)
    if (e.target.value) {
      onInput(e.target.value);
    }
  }

  return (
    <input
      type="number"
      className="main-input"
      defaultValue={value}
      placeholder={placeholder}
      onInput={handleInput}
    />
  );
}
