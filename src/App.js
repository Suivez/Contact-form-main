import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorRadio, setErrorRadio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCheckbox, setErrorCheckbox] = useState("");

  const inputRefFirstName = useRef(null);
  const inputRefLastName = useRef(null);
  const inputRefEmail = useRef(null);
  const inputRefRadioGeneralEnquiry = useRef(null);
  const inputRefRadioSupportRequest = useRef(null);
  const inputRefMesssge = useRef(null);
  const inputRefCheckbox = useRef(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

  const inputComponent = (labelName, type, errorState) => {
    return (
      <div className='box-input'>
        <label className='label-title'>{labelName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></label>
        <input type={type}></input>
        <label className='error-label'>{errorState}</label>
      </div>
    );
  }

  const radioComponent = (radioTitle, ref) => {
    return (
        <div className='radio-option'>
        <label for={radioTitle}>
          <input type='radio' id={radioTitle} name="choice" ref={ref}/>
          {radioTitle}
        </label>
        </div>
    );
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    console.log("General Enquiry: ", inputRefRadioGeneralEnquiry.current.checked);
    console.log("Support Request: ",inputRefRadioSupportRequest.current.checked);

    if(inputRefRadioGeneralEnquiry.current.checked === false && inputRefRadioSupportRequest.current.checked === false) {
      setErrorRadio("ERROR");
    }
  }

  return (
    <div className="App">
      <div className='form-main'>
        <h2>Contact Us</h2>
        <div className='form-section'>
          {inputComponent("First Name", "text")}
          {inputComponent("Last Name", "text")}
        </div>
        <div className='form-section'>
          {inputComponent("Email Address", "email")}
        </div>
        <div className='form-section'>
          <div className='label-title'>Query Type <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
          <div className='radio-section'>
            {radioComponent("General Enquiry", inputRefRadioGeneralEnquiry)}
            {radioComponent("Support Request", inputRefRadioSupportRequest)}
          </div>
          <div className='error-label'>{errorRadio}</div>
        </div>
        <div className='form-section'>
          <div className='box-input'>
            <div className='label-title'>Message <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
            <textarea/>
            <label className='error-label'>{errorMessage}</label>
          </div>
        </div>
        <div className='form-section' style={{flexDirection: 'column'}}>
          <div className='checkbox-input'>
            <input type='checkbox' id='checkbox1'/>
            <label for="checkbox1">I consent to being contacted by the team <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></label>
          </div>
          <label className='error-label'>{errorCheckbox}</label>
        </div>
        <div className='form-section'>
          <button onClick={onSubmitForm}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
