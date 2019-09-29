import React from 'react'
import { Navbar, FormControl, Button, 
         OverlayTrigger, Nav, InputGroup,
         Popover, ButtonToolbar, Tab, 
         Row, Col
        } from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const renderTooltip = props => (
  <div className="belanja" {...props}>
    YOUR CART IS EMPTY
  </div>
);

const Example = () => (
  <OverlayTrigger 
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <FaShoppingCart  className="icon" />
  </OverlayTrigger>
);


class Header extends React.Component {
    render(){
        return (
        <div className="nav-menu">
          <Navbar bg="dark" variant="dark" className="mini-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Promo</Nav.Link>
            <Nav.Link href="#features">Pusat Bantuan</Nav.Link>
            <Nav.Link href="#pricing">Mulai Berjualan</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Link className="navbar-brand mb-2" to="/" >Tokopedia</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ButtonToolbar>
            {['bottom'].map(placement => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Content>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                          <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm={9}>
                            <Tab.Content>
                              <Tab.Pane eventKey="first">
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button size="sm" variant="dark" className="h-25 d-inline-block">Kategori</Button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
          <InputGroup className="mb-2 w-75 p-3">
            <FormControl
              placeholder="Serch"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary"><MdSearch /></Button>
            </InputGroup.Append>
          </InputGroup>
          {/* <div className="ml-2">
            <Example/>
          </div> */}
          <div className="ml-2">
            <Button className="h-25 d-inline-block" size="sm" variant="light">Signin</Button>
            <Button className="h-25 d-inline-block border border-light ml-1" size="sm" variant="dark">Signup</Button>
          </div>
        </Navbar>
        </div>
        )
    }
}

export default Header