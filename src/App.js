import './App.css';

function App() {
  const inputComponent = (labelName, type, errorState) => {
    return (
      <div className='box-input'>
        <label className='label-title'>{labelName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></label>
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
        <div className='label-title'>Query Type <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
        <div className='form-section'>
          {radioComponent("General Enquiry")}
          {radioComponent("Support Request")}
        </div>
        <div className='form-section'>
          <div className='box-input'>
            <div className='label-title'>Message <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
            <textarea/>
          </div>
        </div>
        <div className='form-section'>
          <div className='checkbox-input'>
            <input type='checkbox' id='checkbox1'/>
            <label for="checkbox1">I consent to being contacted by the team <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
