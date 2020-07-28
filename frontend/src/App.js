import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { Container }from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <h1 className="text-center text-primary">react</h1>
      <SignUp />
      </Container>
  );
}

export default App;
