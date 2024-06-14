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

const SYMBOL_BUTTON = [ADD, SUBTRACT, MULTIPLY, DIVIDE, DOT];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Calculator() {
  const [operation, setOperation] = useState("");
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [result, setResult] = useState("");

  function onEqualHandler(type) {
    return () => {
      if (type == EQUAL && operandA && operandB) {
        console.log(operandA);
        console.log(operandB);
        console.log(result);
        switch (operation) {
          case ADD:
            setResult(Number(operandA) + Number(operandB));
            break;
          case SUBTRACT:
            setResult(Number(operandA) - Number(operandB));
            break;
          case MULTIPLY:
            setResult(Number(operandA) * Number(operandB));
            break;
          case DIVIDE:
            setResult(Number(operandA) / Number(operandB));
            break;
          default:
        }
      }
    };
  }

  function onInput(value) {
    console.log(value);
  }

  function handleOperationSelect(type) {
    return () => {
      console.log("type", type);
      setOperation(type);
      setCurrentNumber("");

      if (operandA) {
        if (operation) {
          setOperandB(currentNumber);
        }
      }
    };
  }

  function onNumberClick(number) {
    return () => {
      console.log(number);
      if (operation) {
        setOperandB(`${operandB}${number}`);
        setCurrentNumber(`${operandB}${number}`);
      } else {
        setOperandA(`${operandA}${number}`);
        setCurrentNumber(`${operandA}${number}`);
      }
    };
  }

  return (
    <div>
      <Input
        value={currentNumber}
        placeholder="enter number..."
        onInput={onInput}
      />
      <div className="btn-container">
        {SYMBOL_BUTTON?.map((symbol, i) => {
          return (
            <Button
              dataOperation={symbol}
              key={i}
              label={symbol}
              value={symbol}
              onClick={handleOperationSelect(symbol)}
            />
          );
        })}

        <Button label={EQUAL} value={EQUAL} onClick={onEqualHandler(EQUAL)} />
      </div>
      <p>Selected Operation: {operation}</p>
      <p>
        Result : {result && `${operandA} ${operation} ${operandB} = ${result}`}
      </p>
      <div className="btn-container">
        {nums?.map((num, i) => {
          return (
            <Button
              dataOperation={num}
              value={num}
              key={i}
              onClick={onNumberClick(num)}
            >
              {num}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
