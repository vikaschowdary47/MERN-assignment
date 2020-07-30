import React,{useState} from 'react';
import { Form,Button,Card,Row,Col,Container }from 'react-bootstrap';
import axios from 'axios'

export const SignUp = () => {

const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');


const onSubmit = (e) => {
  e.preventDefault();

  const user = {
    username: username,
    email : email,
    password : password
  }

  console.log(user);

  axios.post('http://localhost:4000/users/add', user)
      .then(res => console.log(res.data))
  window.location = '/login';
}

    return (
      <Container>
        <div className=" d-flex justify-content-center">
            <Card style={{ width: '20rem',padding: '10px',marginTop: '100px',border:' #000000' }}>
            <Form onSubmit={onSubmit}>
            <Form.Group as={Row} controlId="formBasicName">
            <Form.Label column sm={5}>Username</Form.Label>
            <Col sm={10}>
            <Form.Control type="text" name="username" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </Col>
            </Form.Group>             
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={5}>Email address</Form.Label>
              <Col sm={10}>
              <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicPassword">
              <Form.Label column sm={5}>Password</Form.Label>
              <Col sm={10}>
              <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="text-center mb-10">
            <Button  variant="primary" type="submit">
                Signup
              </Button>
              </div>
            </Form>
            </Card>
          </div>
          </Container>
    )
}
