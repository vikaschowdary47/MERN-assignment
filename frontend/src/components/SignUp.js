import React from 'react'
import { Form,Button,Card,Row,Col }from 'react-bootstrap'

export const SignUp = () => {
    return (
        <div className=" d-flex justify-content-center">
            <Card style={{ width: '20rem',padding: '10px',marginTop: '100px',boxShadow:'10pxBlack' }}>
            <Form>
            <Form.Group as={Row} controlId="formBasicName">
            <Form.Label column sm={5}>Username</Form.Label>
            <Col sm={8}>
            <Form.Control type="text" placeholder="Enter username" />
            </Col>
            </Form.Group>             
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
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
    )
}
