import './App.css';

function App() {
  const inputComponent = (labelName, type, name, labelRadioName1, labelRadioName2) => {
    if(type === "radio") {
      return(
        <div className='box-input'>
          <div className='label'>{labelName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
          <div className='radio-box'>
            <div className='radio-option'>
              <input type={type} id={labelRadioName1} name={name}></input>
              <label for={labelRadioName1}>{labelRadioName1}</label>
            </div>
            <div className='radio-option'>
              <input type={type} id={labelRadioName2} name={name}></input>
              <label for={labelRadioName2}>{labelRadioName2}</label>
            </div>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className='box-input'>
          <div className='label'>{labelName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
          <input type={type} name={name}></input>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <div className='form-main'>
        <h2>Contact Us</h2>
        <div className='form-section'>
          {inputComponent("First Name", "text", "first_name")}
          {inputComponent("Last Name", "text", "last_name")}
        </div>
        <div className='form-section'>
          {inputComponent("Email Address", "email", "email_address")}
        </div>
        <div className='form-section'>
          {inputComponent("Query Type", "radio", "chioce", "General Enquiry", "Support Request")}
          {/* <div className='label'>Query Type <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
          <div className='radio-box'>
            <input type='radio' id="general_enquiry" name='choice'/>
            <label for="general_enquiry">General Enquiry</label>
          </div>
          <div className='radio-box'>
            <input type='radio' id="support_request" name='choice'/>
            <label for="support_request">Support Request</label>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
