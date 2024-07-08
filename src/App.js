import './App.css';

function App() {
  const inputComponent = (labelName, type) => {
    if(type === "radio") {
      return (
        <div className='radio-box'>
          <div className='radio-option'>
            <input type={type} id={labelName} name="choice"></input>
            <label for={labelName}>{labelName}</label>
          </div>
        </div>
      )
    }
    else {
      return (
        <input type={type}></input>
      );
    }
  }

  const inputSection = (titleName, type, labelName) => {
      return(
        <div className='box-input'>
          <div className='label'>{titleName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
          {inputComponent(labelName, type)}
        </div>
      );
    }

  return (
    <div className="App">
      <div className='form-main'>
        <h2>Contact Us</h2>
        <div className='form-section'>
          {inputSection("First Name", "text")}
          {inputSection("Last Name", "text")}
        </div>
        <div className='form-section'>
          {inputSection("Email Address", "email")}
        </div>
        <div className='form-section'>
          {inputSection("Query Type", "radio", "General Enquiry")}
          {inputSection("Query Type", "radio", "Support Request")}
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
