import React from 'react';
import DropDownBox from './Components/DropdownBox';
import RadioButton from './Components/RadioButton';
import InputBox from './Components/InputBox';
import Buttons from './Components/Button';
import './App.css';
import LoginPageLayout from './Components/LoginPage-Layout';
function App() {
  return (
    <div className="App">
        {/* <DropDownBox/>
        <InputBox name="Header" value="Quality Performance"/>
        <InputBox name="Tags" value="Overview"/>
        <RadioButton/>
        <InputBox name="Select A/B Admin" value="A/B Admin"/>
        <div>
          <p>Other Customization Option</p>
        </div>
        <Buttons/> */}
       <LoginPageLayout/>
    </div>
  );
}

export default App;
