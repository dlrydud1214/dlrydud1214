import './App.css';
import React, { useState } from "react";
import Config from './components/common/Configuration';
import Input from './components/common/Textfield';

function App() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  function handleCheckbox1Change(event) {
    setIsChecked1(event.target.checked);
  }

  function handleCheckbox2Change(event) {
    setIsChecked2(event.target.checked);
  }

  function handleCheckbox3Change(event) {
    setIsChecked3(event.target.checked);
  }
  return (
    <div>
      <Input 
        label="Label"
        color="#797979"
        message="Helper message"
        id = "nameInput"
        max= "20"
        checked1={isChecked1}
        checked2={isChecked2}
        checked3={isChecked3}
      />
      <Config 
        checked1={isChecked1}
        checked2={isChecked2}
        checked3={isChecked3}
        onCheckbox1Change={handleCheckbox1Change}
        onCheckbox2Change={handleCheckbox2Change}
        onCheckbox3Change={handleCheckbox3Change}
      />
    </div>
  );
}

export default App;


