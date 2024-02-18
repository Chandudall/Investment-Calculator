import { useState } from 'react';
import './App.css';
import Calculator from './component/Investment';
import Results from './component/result.js';

function App() {

  const [userInput,setUserInput]=useState({
    InitialInvestment:10000,
    AnnualInvestment:1000,
    ExpectedInvestment:12,
    Duration:10
})

const inputIsValid=userInput.Duration >=1;
function HandleChange(inputIdentified,newValue){
  setUserInput(preValue=>{
      return{
          ...preValue,
          [inputIdentified]:newValue
      }
  })


 }
  return (
    <div className="App">
      <Calculator onChange={HandleChange} userInput={userInput} />
      {!inputIsValid && <p>Please enter a duration greater than 0</p>}
      {inputIsValid && <Results input={userInput}/>}
     </div>
  );
}

export default App;
