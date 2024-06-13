import { useState } from "react";

export default function Counter() {
  const [counter, setcounter] = useState(0);
  function increase() {
    setcounter(counter + 1);
  }
  function decrease() {
    setcounter(counter - 1);
  }
  return (
    <div className="flex-row">
      <button onClick={increase}>+</button>
      <h3>{counter}</h3>
      <button onClick={decrease}>-</button>
    </div>
  );
}
