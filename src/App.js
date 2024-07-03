import './App.css';

function App() {
  return (
    <div className="App">
      <div className='form-main'>
        <h2>Contact Us</h2>
        <div className='form-section'>
          <div className='box-input'>
            <div className='label'>First Name <span style={{color: "hsl(169, 82%, 27%)"}}>*</span></div>
            <input type='text'></input>
          </div>
          <div className='box-input'>
            <div className='label'>Last Name *</div>
            <input type='text'></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
