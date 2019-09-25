import React from 'react'
import { Navbar, FormControl, Button, InputGroup, OverlayTrigger } from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'

const renderTooltip = props => (
  <div
    {...props}
    style={{
      backgroundColor: 'black',
      padding: '2px 10px',
      color: 'white',
      borderRadius: 3,
      ...props.style,
    }}
  >
    Simple tooltip
  </div>
);

const Example = () => (
  <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button className="tombol" variant="success"><FaShoppingCart className="icon" /></Button>
  </OverlayTrigger>
);


class Header extends React.Component {
    render(){
        return (
          <Navbar className="semua" bg="dark" variant="dark" inverse fixed="top">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <InputGroup className="input mb-3">
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