
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode is enable", "primary")
      document.title = "ShareChat - Light Mode"

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#052846';
      showAlert(" Dark mode is enable", "primary")
      document.title = "ShareChat - Dark Mode"
      // setInterval(() => {
      //   document.title = "ShareChat is amazing"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Download ShareChat Now!!"
      // }, 1500);

    }
  }
  return (
    <>
      <Router>
        <Navbar Mode={Mode} title='ShareChat' aboutText='About' toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container my-2">
          <Switch>
            <Route path="/about">
              <About Mode={Mode} />
            </Route>
            <Route path="/">
              <TextForm heading='Enter something' showAlert={showAlert} Mode={Mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}
export default App;

