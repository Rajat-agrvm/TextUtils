import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2d304c';
      showAlert("Dark mode enabled","success")
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success")
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>setAlert(null),2000);
  };

  return (
   <>
   <Navbar title ="TextUtils" mode={mode} toggleMode = {toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    {/* <About/> */}
   <TextForm heading = "Enter the text to analyze" mode={mode} showAlert={showAlert}/>
   </div>
   </>
  );
}

export default App;
