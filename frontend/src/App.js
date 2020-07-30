import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { Reservation } from './components/Reservation';
import { Login } from './components/Login';
import { Container }from 'react-bootstrap';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {


  const onButtonClick = e => {
    window.location='/signup';
    }
  return (
    <Container fluid>
      
    
      <Router>
        <Switch>
        <Route path="/" exact >
        <h1 className="text-center text-primary">react</h1>
      <div className="d-flex justify-content-center" style={{marginTop:'150px'}}>
        <button className="btn btn-primary" onClick={onButtonClick}>SignUp</button>
        <small>or</small>
        <button className="btn btn-primary">Login</button>
        </div>
        </Route>
        <Route path="/signup">
      <SignUp/>
      </Route>
      <Route path='/reservation'><Reservation /></Route>
      <Route path='/login'><Login /></Route>

      </Switch>
      </Router>
      </Container>
  );
}

export default App;
