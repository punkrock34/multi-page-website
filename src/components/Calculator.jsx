import React from "react";
import {useState, useEffect} from 'react';
import './calculator.css';

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [operators, setOperators] = useState([]);

  function AddToResult(e)
  {
    setResult(prevResult => {
      prevResult === 0 ? setResult(e.target.value) : setResult(prevResult + e.target.value);
    })
  }

  function AddOperatorClearResult(e)
  {
    // settings the numbers array
    if(result === 0) return;
    setNumbers(prevNumbers => {
      return [...prevNumbers, parseFloat(result)];
    });
    // settings the operators array
    setOperators(prevOperators => {
      return [...prevOperators, e.target.value];
    });
    //clear result
    setResult(0);
  }
  
  function ClearResults()
  {
    setResult(0);
    setNumbers([]);
    setOperators([]);
  }

  useEffect(() => {
    let result = numbers[0];
    console.log(numbers,operators);
    for(let i = 0; i < numbers.length; i++)
    {
      switch(operators[i])
      {
        case '+':
          result += numbers[i+1];
          break;
        case '-':
          result -= numbers[i+1];
          break;
        case '*':
          result *= numbers[i+1];
          break;
        case '/':
          result /= numbers[i+1];
          break;
        case '=':
          console.log(result);
          CalculateResult(result);
          break;
        default:
          console.log("Invalid operator");
          break;
      }
    }
  },[operators, numbers]);

  function CalculateResult(ResultOfCalculation)
  {
    console.log(ResultOfCalculation);
    //check if int or float
    if(ResultOfCalculation % 1 === 0)
      setResult(parseInt(ResultOfCalculation));
    else
      setResult(parseFloat(ResultOfCalculation).toFixed(2));
    //clear the numbers and operators arrays
    setNumbers([]);
    setOperators([]);
  }

  return (
    <div className="calculator">
        <div className="row">
            <div className="result-calculation">{result}</div>
        </div>
        <div className="row">
            <div className="col-3">
                <button className="btn btn-primary button" value={9} onClick={AddToResult}>9</button>
                <button className="btn btn-primary button" value={6} onClick={AddToResult}>6</button>  
                <button className="btn btn-primary button" value={3} onClick={AddToResult}>3</button>
            </div>
            <div className="col-3">
                <button className="btn btn-primary button" value={8} onClick={AddToResult}>8</button>
                <button className="btn btn-primary button" value={5} onClick={AddToResult}>5</button>
                <button className="btn btn-primary button" value={2} onClick={AddToResult}>2</button>
            </div>
            <div className="col-3">
                <button className="btn btn-primary button" value={7} onClick={AddToResult}>7</button>
                <button className="btn btn-primary button" value={4} onClick={AddToResult}>4</button>
                <button className="btn btn-primary button" value={1} onClick={AddToResult}>1</button>
            </div>
            <button className="btn btn-primary button" value={0} onClick={AddToResult} style = {{marginLeft:"40%", right:"6.5px"}}>0</button>
      </div>
      <br></br>
      <div className="row">
          <button className="btn btn-primary button-gray" value = '/' onClick={AddOperatorClearResult}>/</button>
          <button className="btn btn-primary button-gray" value = '*' onClick={AddOperatorClearResult}>*</button>
          <button className="btn btn-primary button-gray" value = '-' onClick={AddOperatorClearResult}>-</button>
          <button className="btn btn-primary button-gray" value = '+' onClick={AddOperatorClearResult}>+</button>
          <button className="btn btn-primary button-gray" value = '=' onClick={AddOperatorClearResult}>=</button>
          <button className="btn btn-primary button-gray" value = 'C' onClick={ClearResults}>C</button>
      </div>
    </div>
  );
}