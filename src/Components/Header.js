import React from 'react'
import {
  Navbar, FormControl, Button,
  OverlayTrigger, Nav, InputGroup,
  Popover, ButtonToolbar, Tab,
  Row, Col
} from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
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
    <FaShoppingCart className="icon" />
  </OverlayTrigger>
);


class Header extends React.Component {
  render() {
    return (
      <div className="nav-menu">
        <Navbar bg="dark" variant="dark" className="mini-nav">
          <Nav className="mr-auto">
            <Link to="/" className="icon"><FaInstagram /></Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link><Link className="text-decoration-none text-light" to="/">Promo</Link></Nav.Link>
            <Nav.Link><Link class="text-decoration-none text-light" to="/PusatBantuan">Pusat Bantuan</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none text-light" to="/">Mulai Berjualan</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Link className="navbar-brand mb-1" to="/" >Crowded</Link>
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
                          <Col class="overflow-auto text-white bg-dark">
                            <Nav bg="dark" variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="Satu">Tas</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Dua">Hooddie</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Tiga">Baju</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Empat">Topi</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Lima">Jaket</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Enam">Celana</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Tujuh">Gelang</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="Delapan">Jam Tangan</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col>
                            <Tab.Content>
                              <Tab.Pane eventKey="Satu">
                                <p>Hello world</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Dua">
                                <p>Welcome back to loby gaming</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Tiga">
                                <p>Welcome back to loby gaming</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Empat">
                                <p>Welcome back to loby gaming</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Lima">
                                <p>Welcome back to loby gaming</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Enam">
                                <p>Welcome back to loby gaming</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Tujuh">
                                <p>Welcome back to loby gaming</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="Delapan">
                                <p>Welcome back to loby gaming</p>
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
            <Link to="/Signin"><Button className="h-25 d-inline-block" size="sm" variant="light">Signin</Button></Link>
            <Link to="/Signup"><Button className="h-25 d-inline-block border border-light ml-1" size="sm" variant="dark">Signup</Button></Link>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header