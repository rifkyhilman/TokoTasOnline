import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

class Froms extends React.Component {
    render() {
        return (
        <Form className="body container">
            <Col xs={5}>
            <h2 className="label">CUSTOMER LOGIN</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="judul">Email</Form.Label>
              <Form.Control className="input2" size="lg" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <div className="barispsw">
              <Form.Label className="judul">Password</Form.Label>
                <Form.Text className="text-muted">
                    Forgot your password?
                </Form.Text>
            </div>
              <Form.Control className="input2" size="lg" type="password" />
            </Form.Group>
            <div className="barispsw">
            <Button variant="dark" type="submit">
              Login
            </Button>
            <Form.Text className="text-muted">
                New Customer? 
            </Form.Text>
            </div>
            </Col>
          </Form>
        )
    }
}

export default Froms