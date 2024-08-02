import { useRef, useState } from 'react';
import './App.css';
import IconSuccess from './images/icon-success-check.svg'
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

  const [isErrorFisrtName, setIsErrorFirstName] = useState(false);
  const [isErrorLastName, setIsErrorLastName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const [displayPopup, setDisplayPopup] = useState("none");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const inputComponent = (labelName, type, errorState, ref, borderColor) => {
    return (
      <div className='box-input'>
        <label className='label-title'>{labelName} <span style={{ color: "hsl(169, 82%, 27%)" }}>*</span></label>
        <input type={type} ref={ref} style={{borderColor: borderColor}}></input>
        <label className='error-label'>{errorState}</label>
      </div>
    );
  }

  const radioComponent = (radioTitle, ref) => {
    return (
      <div className='radio-option'>
          <input type='radio' id={radioTitle} name="choice" ref={ref} />
          <span className='checkmark-radio'></span>
          <label for={radioTitle} style={{marginLeft: '35px'}}>
          {radioTitle}
        </label>
      </div>
    );
  }

  const resultPopup = () => {
    return (
      <div className='popup-container' style={{ display: displayPopup }}>
        <div className='popup-title'>
          <img src={IconSuccess} alt="success" />
          <h4>Message sent!</h4>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
    );
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    console.log("General Enquiry: ", inputRefRadioGeneralEnquiry.current.checked);
    console.log("Support Request: ", inputRefRadioSupportRequest.current.checked);
    console.log("Checkbox: ", inputRefCheckbox.current.checked);

    if (inputRefRadioGeneralEnquiry.current.checked === false && inputRefRadioSupportRequest.current.checked === false) {
      setErrorRadio("Please select a query type");
    }
    else {
      setErrorRadio("");
    }

    if (inputRefCheckbox.current.checked === false) {
      setErrorCheckbox("To submit this form, please consent to being contacted");
    }
    else {
      setErrorCheckbox("");
    }

    if (inputRefEmail.current.value === "") {
      setErrorEmail("This field is required");
      setIsErrorEmail(true);
    }
    else if (!isValidEmail(inputRefEmail.current.value)) {
      setErrorEmail("Please enter a valid email address");
      setIsErrorEmail(true);
    }
    else {
      setErrorEmail("");
      setIsErrorEmail(false)
    }

    if (inputRefFirstName.current.value === "") {
      setErrorFirstName("This field is required");
      setIsErrorFirstName(true);
    }
    else {
      setErrorFirstName("");
      setIsErrorFirstName(false);
    }

    if (inputRefLastName.current.value === "") {
      setErrorLastName("This field is required");
      setIsErrorLastName(true);
    }
    else {
      setErrorLastName("");
      setIsErrorLastName(false);
    }

    if (inputRefMesssge.current.value === "") {
      setErrorMessage("This field is required");
      setIsErrorMessage(true);
    }
    else {
      setErrorMessage("");
      setIsErrorMessage(false);
    }

    if ((inputRefRadioGeneralEnquiry.current.checked === true || inputRefRadioSupportRequest.current.checked === true)
      && inputRefCheckbox.current.checked === true
      && inputRefEmail.current.value !== ""
      && isValidEmail(inputRefEmail.current.value)
      && inputRefFirstName.current.value !== ""
      && inputRefLastName.current.value !== ""
      && inputRefMesssge.current.value !== "") {
      setDisplayPopup("flex");

      setTimeout(() => {
        setDisplayPopup("none");
      }, 3000)

      inputRefCheckbox.current.checked = false;
      inputRefRadioGeneralEnquiry.current.checked = false;
      inputRefRadioSupportRequest.current.checked = false;
      inputRefFirstName.current.value = "";
      inputRefLastName.current.value = "";
      inputRefEmail.current.value = "";
      inputRefMesssge.current.value = "";
    }
  }

  return (
    <div className="App">
      <div className='form-main'>
        <h2>Contact Us</h2>
        <div className='form-section'>
          {inputComponent("First Name", "text", errorFirstName, inputRefFirstName, isErrorFisrtName ? 'var(--Red)' : "")}
          {inputComponent("Last Name", "text", errorLastName, inputRefLastName, isErrorLastName ? "var(--Red)" : "")}
        </div>
        <div className='form-section'>
          {inputComponent("Email Address", "email", errorEmail, inputRefEmail, isErrorEmail ? "var(--Red)" : "")}
        </div>
        <div className='form-section'>
          <div className='label-title'>Query Type <span style={{ color: "hsl(169, 82%, 27%)" }}>*</span></div>
          <div className='radio-section'>
            {radioComponent("General Enquiry", inputRefRadioGeneralEnquiry)}
            {radioComponent("Support Request", inputRefRadioSupportRequest)}
          </div>
          <div className='error-label'>{errorRadio}</div>
        </div>
        <div className='form-section'>
          <div className='box-input'>
            <div className='label-title'>Message <span style={{ color: "hsl(169, 82%, 27%)" }}>*</span></div>
            <textarea ref={inputRefMesssge} style={{borderColor: isErrorMessage ? "var(--Red)" : ""}}/>
            <label className='error-label'>{errorMessage}</label>
          </div>
        </div>
        <div className='form-section' style={{ flexDirection: 'column' }}>
          <div className='checkbox-input'>
            <input type='checkbox' id='checkbox1' ref={inputRefCheckbox} />
            <span className='checkmark-checkbox'></span>
            <label for="checkbox1">I consent to being contacted by the team <span style={{ color: "hsl(169, 82%, 27%)" }}>*</span></label>
          </div>
          <label className='error-label'>{errorCheckbox}</label>
        </div>
        <div className='form-section'>
          <button onClick={onSubmitForm}>Submit</button>
        </div>
      </div>
      {resultPopup()}
    </div>
  );
}

export default App;
