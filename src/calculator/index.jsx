import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import "./style.css";

const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
const EQUAL = "=";
const DOT = ".";

const SYMBOL_BUTTON = [ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUAL, DOT];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Calculator() {
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  function onInput(value) {
    console.log(value);
    setOperandA(value);
    return value;
  }

  function onButtonClick(value) {
    console.log("clicked button");
    console.log("type:"+isNaN(value))
    if (isNaN(value)) {
      setOperation(value);
    }
    onInput(value);
  }
  return (
    <div>
      <Input placeholder="enter number..." onInput={onInput} />
      <div className="btn-container">
        {SYMBOL_BUTTON?.map((symbol, i) => {
          return (
            <Button
              key={i}
              label={symbol}
              value={symbol}
              onClick={(symbol) => onButtonClick(symbol)}
            />
          );
        })}
      </div>
      <h2>Selected Operation: {operation}</h2>
      <div className="btn-container">
        {nums?.map((num, i) => {
          return (
            <Button
              dataOperation={num}
              value={num}
              key={i}
              onClick={(num) => onButtonClick(num)}
            >
              {num}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
