import React,{useState} from 'react';
import { Form,Button,Card,Row,Col,Container }from 'react-bootstrap';
import axios from 'axios'

export const Login = () => {


const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [data,setData] = useState(null)


const onSubmit = (e) => {
  e.preventDefault();
 const user = {
    email : email,
    password : password
  }

  axios.post('http://localhost:4000/users/login', user)
      .then((res) => console.log(res));
          // window.location = '/reservation';
}
  


 

    return (
      <Container>
        <div className=" d-flex justify-content-center">
            <Card style={{ width: '20rem',padding: '10px',marginTop: '100px',border:' #000000' }}>
            <Form onSubmit={onSubmit}>
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
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="reme" />
            </Form.Group> */}
            <div className="text-center mb-10">
            <Button  variant="primary" type="submit">
                Login
              </Button>
              </div>
            </Form>
            </Card>
          </div>
          </Container>
    )
}
