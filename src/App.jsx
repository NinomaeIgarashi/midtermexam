import './App.css'
import {useState} from 'react';

// Display Component Function
function Display({ value }) {
  return (
    <div className='display'>
      {value}
    </div>
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={`Button ${className}`.trim()} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {

  const[disp, setDisp] = useState('10 Things That Require Zero Talent');

  const buttonHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (value === "1"){
      setDisp('Being On Time');
    } else if (value === "2") {
      setDisp('Making An Effort');
    } else if (value === "3") {
      setDisp('Being High Energy');
    } else if (value === "4") {
      setDisp('Having A Positive Attitude');
    } else if (value === "5") {
      setDisp('Being Passionate');
    } else if (value === "6") {
      setDisp('Using Good Body Language');
    } else if (value === "7") {
      setDisp('Being Coachable');
    } else if (value === "8") {
      setDisp('Doing A Little Extra');
    } else if (value === "9") {
      setDisp('Being Prepared');
    } else if (value === "NAME") {
      setDisp('LUIS NICHOLAS REYES');
    } else if (value === "0") {
      setDisp('Having A Strong Work Ethic');
    } else if (value === "SUBJ") {
      setDisp('C-PCIT9');
    }
  }
 
  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">LUIS NICHOLAS REYES - BSIT-WMD-3A</h1>
        <Display value={disp} />
        <div className="buttons">
          <Button label="7" onClick={buttonHandler}/>
          <Button label="8" onClick={buttonHandler}/>
          <Button label="9" onClick={buttonHandler}/>

          <Button label="4" onClick={buttonHandler}/>
          <Button label="5" onClick={buttonHandler}/>
          <Button label="6" onClick={buttonHandler}/>

          <Button label="1" onClick={buttonHandler}/>
          <Button label="2" onClick={buttonHandler}/>
          <Button label="3" onClick={buttonHandler}/>

          <Button label="NAME" onClick={buttonHandler}/>
          <Button label="0" onClick={buttonHandler}/>
          <Button label="SUBJ" onClick={buttonHandler}/>
        </div>
      </div>
    </div>
  );
}