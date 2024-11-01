import "./App.css"
import { useState } from 'react';

function App() {
  const [firstPanelNum, updateFirstNum] = useState(0);
  const [secondPanelNum, updateSecondNum] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleClickPanel1 = (num) => {
    updateFirstNum(num);
  };

  const handleClickPanel2 = (num) => {
    updateSecondNum(num)
  };

  const updateOperator = (operator) => {
    setOperator(operator)
  };

  const computeTotal = () => {
    let res;
    switch (operator) {
      case '+':
        res = firstPanelNum + secondPanelNum;
        break;
      case '-':
        res = firstPanelNum - secondPanelNum;
        break;
      case '*':
        res = firstPanelNum * secondPanelNum;
        break;
      case '÷':
        res = firstPanelNum / secondPanelNum;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstPanelNum}</p>
        <div className="numbers">
          {[...Array(11)].map((_, index) => (
            <button 
            key={index} 
            onClick={() => handleClickPanel1(index === 10 ? 0 : index)}>
              {index === 10 ? "Clear" : index}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => updateOperator('+')}>+</button>
          <button onClick={() => updateOperator('-')}>-</button>
          <button onClick={() => updateOperator('*')}>*</button>
          <button onClick={() => updateOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondPanelNum}</p>
        <div className="numbers">
          {[...Array(11)].map((_, index) => (
              <button 
                key={index} 
                onClick={() => handleClickPanel2(index === 10 ? 0 : index)}
              >
                {index === 10 ? "Clear" : index}
              </button>
            ))}
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => computeTotal()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
