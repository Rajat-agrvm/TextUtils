import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [theme,setTheme] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      if(theme === 'green'){
        document.body.style.backgroundColor = '#3f6752';
      }else {
        document.body.style.backgroundColor = '#2d304c';
      }
      showAlert("Dark mode enabled","success")
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success")
    }
  }

  const setGreenTheme = ()=>{
    if(mode === 'dark'){
      setTheme('green');
      console.log(theme);
      document.body.style.backgroundColor = '#355142';
    } else {
      setTheme('green');
    }
    showAlert("Green theme selected","success")
  }

  const setDefaultTheme = ()=>{
    if(mode === 'dark'){
      setTheme('default');
      document.body.style.backgroundColor = '#2d304c';
    } else {
      setTheme('default');
    }
    showAlert("Default theme selected","primary")
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:theme==='green'?'success':'primary'
    })
    setTimeout(()=>setAlert(null),2000);
  };

  useEffect(() => {
    if (theme === 'green') {
      showAlert('Green theme selected', 'success');
    }
    if (theme === 'default') {
      showAlert("Default theme selected","primary")
    }
  }, [theme]); // Watch for changes in the "theme" state

  return (
   <>
    <Router>
      <Navbar title ="TextUtils" mode={mode} toggleMode = {toggleMode} setGreenTheme = {setGreenTheme} showAlert={showAlert} setDefaultTheme={setDefaultTheme}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading = "Enter the text to analyze" mode={mode} showAlert={showAlert} theme={theme}/>}/>
            <Route exact path="/about" element=  {<About mode = {mode}/>} />
          </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;
