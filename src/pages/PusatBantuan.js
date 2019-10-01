import React from 'react'
import { Carousel, InputGroup, FormControl, Button } from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'

class Bantuan extends React.Component {
    render() {
        return (
                <div>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1512411388817-f1412ebdcae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                    alt="First slide"
                    />
                    <InputGroup className="mb-2 w-75 p-3" size="lg">
                        <FormControl
                        placeholder="Serch"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary"><MdSearch /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
        )
    }
}

export default Bantuan