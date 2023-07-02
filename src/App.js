// import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') ;
  const toggleMode = ()=>{
  if(mode ==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor = "#073981";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "white";
  }

}
  
  return (
    <>
    {/* <Navbar/> */}
    {/* here the mode state used in navbar is only used to change the mode of navbar using props// */}
    <Navbar title= "TextUtils" aboutText ="About TextUtils" mode={mode} toggleMode={toggleMode} /> 
    <div className="container my-3">
    <TextForm heading = "Enter the Text below" mode={mode} />
  
    </div>
    </>
    
  );
}


export default App;

