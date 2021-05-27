import React from 'react'
import {
  Navbar, Button,
  OverlayTrigger, Nav, DropdownButton, Dropdown
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
          <div className="d-flex justify-content-center">
            <DropdownButton title="T-Shirt" className="p-3 bg-transparent text-dark" variant="dark">
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Accecoris" className="p-3 bg-transparent text-dark" variant="dark">
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Jacket" className="p-3 bg-transparent text-dark" variant="dark">
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Bag" className="p-3 bg-transparent text-dark" variant="dark">
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Best seller" className="p-3 bg-transparent text-dark" variant="dark">
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="ml-5">
            <Link to="/Signin"><Button className="h-25 d-inline-block ml-5" size="sm" variant="light">Sign in</Button></Link>
            <Link to="/Signup"><Button className="h-25 d-inline-block border border-light ml-1" size="sm" variant="dark">Sign up</Button></Link>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header