/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from 'react';

function App() {
  const [firstPanelNumList, setFirstPanelNumList] = useState(['0']);
  const [firstPanelNum, setFirstPanelNum] = useState(0);
  const [secondPanelNumList, setSecondPanelNumList] = useState(['0']);
  const [secondPanelNum, setSecondPanelNum] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);
  const [storedResult, setStoredResult] = useState();
  const [storedMessage, setStoredMessage] = useState('');

  const handlePanelInput = (num, setNumList, setNum) => {
    const stringNum = String(num);

    setNumList((prev) => {
      const updatedList = prev[0] === '0' && prev[1] !== '.' ? 
      [stringNum] : [...prev, stringNum];
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

  const commaSeparator = (list, setList) => {
    if (list.includes('.')) {
      return;
    } else {
      setList((prev) => [...prev, '.']);
    }
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
        <p>{firstPanelNumList.join('')}</p>
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
            Clear
          </button>
          <button
            onClick={() => {
              setFirstPanelNum(storedResult);
              setFirstPanelNumList([String(storedResult)]);
            }}>
            Recall
          </button>
          <button
            onClick={() => {
              commaSeparator(firstPanelNumList, setFirstPanelNumList);
            }}>
            .
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
        <p>{secondPanelNumList.join('')}</p>
        <div className="numbers">
          {[...Array(10)].map((_, index) => (
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
              Clear
          </button>
          <button
            onClick={() => {
              setSecondPanelNum(storedResult);
              setSecondPanelNumList([String(storedResult)]);
            }}>
            Recall
          </button>
          <button
            onClick={() => {
              commaSeparator(secondPanelNumList, setSecondPanelNumList);
            }}>
            .
          </button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => computeTotal()}>=</button>
          <button
            onClick={() => {
              setStoredResult(result);
              setStoredMessage(`Stored ${result.toFixed(2)}`);
            }}
          >
            Store
          </button>
            <p>{storedMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
