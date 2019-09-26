import React from 'react'
import { Navbar, FormControl, Button, InputGroup, OverlayTrigger } from 'react-bootstrap'
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
    <Button className="tombol"><FaShoppingCart className="icon" /></Button>
  </OverlayTrigger>
);


class Header extends React.Component {
    render(){
        return (
          <Navbar className="semua" bg="dark" variant="dark" inverse fixed="top">
            <Link  to='/' className="navbar-brand">Navbar</Link>
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
            <Example/>
          </Navbar>
        )
    }
}

export default Header