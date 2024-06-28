import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import alert from './Components/alert';

function App() {

  const [mode,setMode] = useState('light')

  const [btnText,newbtnText]= useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);

    },1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='black';
      document.body.style.color='white';
      newbtnText("Enable Light Mode");
      showAlert("Dark Mode has been Enable", "success");
      // document.title = "Dark Mode";
    } else {
      setMode('light');
      document.body.style.background='white';
      document.body.style.color='black';
      newbtnText("Enable Dark Mode");
      showAlert("Light Mode has been Enable", "success")
      // document.title = "Dark Mode";

    }
  }

  const btnMode = () => {
    if (mode === 'light') {
      newbtnText('dark');
      document.body.style.background='black';  
      document.body.style.color='white';
    } else {
      newbtnText('light');
      document.body.style.background='white';
      document.body.style.color='black';
    }
  
  }
  return (
    <>
      <Navbar title='Text Mechanic' aboutText="Contact Us" mode={mode} toggleMode = {toggleMode} btntext={btnText}/>
      <Alert alert={alert}/>
      <Textform heading="Repair Your Text Here" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></Textform>

   </>
  );
}

export default App;
