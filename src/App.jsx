import { useState, useEffect } from "react";
import "./App.css";

function Display(props) {
  return (
    <>
      <h1>{props.display}</h1>
    </>
  );
}

function Button(props) {
  return (
    <>
      <button
        // style={{ width: "40px", height: "40px" }}
        onClick={() => props.onClick(props.keyValue)}
      >
        {props.keyValue}
      </button>
    </>
  );
}

export default function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");

  const handleNum = (number) => {
    if (input === "0") {
      setInput(number);
    } else {
      setInput(input + number);
    }
  };

  const clearData = () => {
    setInput("0");
    setResult("0");
  };

  const handleInput = (value) => {
    if (!isNaN(parseInt(value))) {
      handleNum(value);
    } else if (value === "AC") {
      clearData();
    } else if (value === "+") {
      setResult(eval(input));
      setInput(input + "+");
    } else if (value === "-") {
      setResult(eval(input));
      setInput(input + "-");
    } else if (value === "x") {
      setResult(eval(input));
      setInput(input + "*");
    } else if (value === "/") {
      setResult(eval(input));
      setInput(input + "/");
    } else if (value === "=") {
      setResult(eval(input));
      setInput(input);
    } else if (value === ".") {
      let lastPlus = input.lastIndexOf("+");
      let lastMinus = input.lastIndexOf("-");
      let lastMultiply = input.lastIndexOf("*");
      let lastDivide = input.lastIndexOf("/");
      let lastOp = Math.max(lastPlus, lastMinus, lastMultiply, lastDivide);
      if (input.slice(-1) === ".") {
        return;
      } else if (
        input.slice(-1) === "+" ||
        input.slice(-1) === "-" ||
        input.slice(-1) === "*" ||
        input.slice(-1) === "/"
      ) {
        setInput(input + "0.");
        // setResult(eval(input + "0."));
      } else if (input.includes(".", lastOp)) {
        return;
      } else {
        // setResult(eval(input));
        setInput(input + ".");
      }
    }
  };

  return (
    <div className="calculator">
      <div className="displays">
        <div className="input">
          <Display display={input} />
        </div>
        <div className="result">
          <Display id="display" display={result} />
        </div>
      </div>
      <div className="buttons">
        <div className="numbers">
          <Button id="seven" keyValue={"7"} onClick={handleInput} />
          <Button id="eight" keyValue={"8"} onClick={handleInput} />
          <Button id="nine" keyValue={"9"} onClick={handleInput} />
          <Button id="four" keyValue={"4"} onClick={handleInput} />
          <Button id="five" keyValue={"5"} onClick={handleInput} />
          <Button id="six" keyValue={"6"} onClick={handleInput} />
          <Button id="one" keyValue={"1"} onClick={handleInput} />
          <Button id="two" keyValue={"2"} onClick={handleInput} />
          <Button id="three" keyValue={"3"} onClick={handleInput} />
        </div>
        <div className="zeroAndDecimal">
          <Button id="zero" keyValue={"0"} onClick={handleInput} />
          <Button id="decimal" keyValue={"."} onClick={handleInput} />
        </div>
        <div className="operators">
          <Button id="clear" keyValue={"AC"} onClick={handleInput} />
          <Button id="add" keyValue={"+"} onClick={handleInput} />
          <Button id="subtract" keyValue={"-"} onClick={handleInput} />
          <Button id="multiply" keyValue={"x"} onClick={handleInput} />
          <Button id="divide" keyValue={"/"} onClick={handleInput} />
        </div>
        <div className="equal">
          <Button id="equals" keyValue={"="} onClick={handleInput} />
        </div>
      </div>
    </div>
  );
}
