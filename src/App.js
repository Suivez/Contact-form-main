import './App.css';

function App() {
  const inputComponent = (labelName, type) => {
    return(
      <div className='box-input'>
        <div className='label'>{labelName} <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
        <input type={type}></input>
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
          {inputComponent("Email Address", "Email")}
        </div>
      </div>
    </div>
  );
}

export default App;
