import './App.css';

function App() {
  const inputComponent = (labelName, type, errorState) => {
    return (
      <div className='box-input'>
        <div className='label'>{labelName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
        <input type={type}></input>
      </div>
    );
  }

  const radioComponent = (radioTitle, erroState) => {
    return (
      <div className='radio-box'>
        <div className='radio-option'>
          <input type='radio' id={radioTitle} name="choice"/>
          <label for={radioTitle}>{radioTitle}</label>
        </div>
      </div>
    );
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
        <div className='label'>Query Type <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
        <div className='form-section'>
          {radioComponent("General Enquiry")}
          {radioComponent("Support Request")}
        </div>
      </div>
    </div>
  );
}

export default App;
