import React from 'react'
import {Button, Form, Card} from "react-bootstrap";


function Login() {
  return (

    <Card style={{ width: '40%' }} className='mx-auto card rounded-sm shadow-sm'> 

    <Card.Body>
      <Card.Title className='text-center'><h4>Login</h4></Card.Title>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      </Form>
    
      <Button variant="dark" type="submit" className='w-50'>
        Submit
      </Button>
    
        
    </Card.Body>
  </Card>
  )
}

export default Login