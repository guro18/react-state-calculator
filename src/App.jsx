import "./App.css"
import { useState } from 'react';

function App() {
  const [firstPanelNumList, setFirstPanelNumList] = useState(['0']);
  const [firstPanelNum, setFirstPanelNum] = useState(0);
  const [secondPanelNumList, setSecondPanelNumList] = useState(['0']);
  const [secondPanelNum, setSecondPanelNum] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handlePanelInput = (num, setNumList, setNum) => {
    const stringNum = String(num);

    setNumList((prev) => {
      const updatedList = prev[0] === '0' ? [stringNum] : [...prev, stringNum];
      setNum(Number(updatedList.join('')));
      return updatedList;
    })
  };

  const resetPanel = (setPanelNumList, setPanelNum) => {
    setPanelNumList(['0']);
    setPanelNum(0);
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
          {[...Array(10)].map((_, index) => (
            <button 
              key={index} 
              onClick={() => handlePanelInput(
                index, 
                setFirstPanelNumList, 
                setFirstPanelNum)}
            >
              {index}
            </button>
          ))}
          <button onClick={() => 
            resetPanel(setFirstPanelNumList, setFirstPanelNum)
          }>
            clear
          </button>
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
                onClick={() => handlePanelInput(
                  index,
                  setSecondPanelNumList,
                  setSecondPanelNum)}
              >
                {index}
              </button>
            ))}
            <button onClick={() => 
              resetPanel(setSecondPanelNumList, setSecondPanelNum)
            }>
              clear
          </button>
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
