import { useState } from 'react'
import './App.css'

function Display(props) {
  
  return (
    <>
      <h1>{props.display}</h1>
    </>
  )
}

function Button(props) {
  
  return (
    <>
      <button style={{width: '40px', height: '40px'}} onClick={() => props.onClick(props.keyValue)}>{props.keyValue}</button>
    </>
  );
}

export default function App() {
  
  const [calculation, setCalculation] = useState('0');
  const [result, setResult] = useState('.');
  const [operation, setOperation] = useState(null);
  
  const handleNum = (number) => {
    setCalculation(calculation === '0' ? String(number) : calculation + number);
  };
  
  const clearData = () => {
    setCalculation('0');
    setResult('.');
  }
  
  const handleOperation = (value) => {
    if (!isNaN(value)) {
      handleNum(value);
    } else if (value === 'AC') {
      clearData();
    }
  };
  
  return (
      <>
        <Display display={calculation} />
        <Display id="display" display={result} />
        <Button id="clear" keyValue={'AC'} onClick={handleOperation} />
        <Button id='one' keyValue={1} onClick={handleOperation} />
        <Button id='two' keyValue={2} onClick={handleOperation} />
        <Button id='three' keyValue={3} onClick={handleOperation} />
        <Button id='four' keyValue={4} onClick={handleOperation} />
        <Button id='five' keyValue={5} onClick={handleOperation} />
        <Button id='six' keyValue={6} onClick={handleOperation} />
        <Button id='seven' keyValue={7} onClick={handleOperation} />
        <Button id='eight' keyValue={8} onClick={handleOperation} />
        <Button id='nine' keyValue={9} onClick={handleOperation} />
        <Button id='zero' keyValue={0} onClick={handleOperation} />
        <Button id="divide" keyValue={'/'} onClick={handleOperation} />
        <Button id="multiply" keyValue={'x'} onClick={handleOperation} />
        <Button id="subtract" keyValue={'-'} onClick={handleOperation} />
        <Button id="add" keyValue={'+'} onClick={handleOperation} />
        <Button id="decimal" keyValue={'.'} onClick={handleOperation} />
        <Button id='equals' keyValue={'='} onClick={handleOperation} />
      </>
  );
}