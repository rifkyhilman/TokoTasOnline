import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


class Froms extends React.Component {
  render() {
    return (
      <Form className="body2 container">
        <Col xs={5}>
          <h2 className="label2">Create Account</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="judul2">Firts Name</Form.Label>
            <Form.Control className="input2" size="lg" type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="judul2">Last Name</Form.Label>
            <Form.Control className="input2" size="lg" type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="judul2">Email</Form.Label>
            <Form.Control className="input2" size="lg" type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="judul2">Password</Form.Label>
            <Form.Control className="input2" size="lg" type="password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="SUBSCRIBE" />
          </Form.Group>
          <div className="barispsw2">
            <Button className="btnsignup" variant="dark" type="submit">
              SIGN UP
            </Button>
            {/* <Form.Text className="text-muted">
                New Customer? <Link  to='/signin'>Signin</Link>
            </Form.Text> */}
          </div>
        </Col>
      </Form>
    )
  }
}

export default Froms