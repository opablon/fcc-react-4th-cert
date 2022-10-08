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
        style={{ width: "40px", height: "40px" }}
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

  const handleOperation = (value) => {
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
      setInput(eval(input));
    } else if (value === ".") {
      if (input.slice(-1) === ".") {
        return;
      } else if (
        input.slice(-1) === "+" ||
        input.slice(-1) === "-" ||
        input.slice(-1) === "*" ||
        input.slice(-1) === "/"
      ) {
        setInput(input + "0.");
        setResult(eval(input + "0."));
      } else {
        setResult(eval(input));
        setInput(input + ".");
      }
    }
  };

  return (
    <>
      <Display display={input} />
      <Display id="display" display={result} />
      <Button id="clear" keyValue={"AC"} onClick={handleOperation} />
      <Button id="one" keyValue={"1"} onClick={handleOperation} />
      <Button id="two" keyValue={"2"} onClick={handleOperation} />
      <Button id="three" keyValue={"3"} onClick={handleOperation} />
      <Button id="four" keyValue={"4"} onClick={handleOperation} />
      <Button id="five" keyValue={"5"} onClick={handleOperation} />
      <Button id="six" keyValue={"6"} onClick={handleOperation} />
      <Button id="seven" keyValue={"7"} onClick={handleOperation} />
      <Button id="eight" keyValue={"8"} onClick={handleOperation} />
      <Button id="nine" keyValue={"9"} onClick={handleOperation} />
      <Button id="zero" keyValue={"0"} onClick={handleOperation} />
      <Button id="decimal" keyValue={"."} onClick={handleOperation} />
      <Button id="add" keyValue={"+"} onClick={handleOperation} />
      <Button id="subtract" keyValue={"-"} onClick={handleOperation} />
      <Button id="multiply" keyValue={"x"} onClick={handleOperation} />
      <Button id="divide" keyValue={"/"} onClick={handleOperation} />
      <Button id="equals" keyValue={"="} onClick={handleOperation} />
    </>
  );
}
