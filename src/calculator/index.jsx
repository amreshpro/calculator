import Button from "./components/button";
import Input from "./components/input";
import "./style.css";

const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
const EQUAL = "=";
const DOT = ".";

const SYMBOL_BUTTON=[ADD,SUBTRACT,MULTIPLY,DIVIDE,EQUAL,DOT]

export default function Calculator() {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function onInput(value) {
    console.log(value);
  }

  function onButtonClick() {
    console.log("clicked button");
  }
  return (
    <div>
      <Input placeholder="enter number..." onInput={onInput} />
      <div className="btn-container">
        {
          SYMBOL_BUTTON?.map((symbol,i)=>{
            return <Button key={i} label={symbol} value={symbol} onClick={onButtonClick}  />
          })
        }
      </div>

      <div className="btn-container">
        {nums?.map((num, i) => {
          return (
            <Button value={num} key={i} onClick={onButtonClick}>
              {num}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
