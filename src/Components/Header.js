import React from 'react'
import { Navbar, FormControl, Button, 
         InputGroup, OverlayTrigger, Nav, 
         ButtonToolbar, DropdownButton, Dropdown
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
        <Navbar bg="dark" variant="dark" fixed="top">
          <div className="semua container">
          <Link className="navbar-brand" to="/" >Navbar</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <InputGroup className="input1 mb-3">
                <FormControl
                  placeholder="Cari Produk"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">
                    <MdSearch />
                  </Button>
                </InputGroup.Append>
          </InputGroup>
          <Example />
          <ButtonToolbar>
            <Button className="btn-sign" variant="light"><Link className="signin" to="/signin">Signin</Link></Button>
            <Button className="btn-signup" variant="dark"><Link className="signup" to="/signup">Signup</Link></Button>
          </ButtonToolbar>
          </div>
        </Navbar>
        )
    }
}

export default Header