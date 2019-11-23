import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
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
                    <div class="shadow-lg p-3 mb-5 bg-white rounded row ml-4 mr-4">
                        <h6 className="mt-auto">
                            Masuk untuk mendapat bantuan terkait transaksi Anda
                        </h6>
                        <Button className="h-25 d-inline-block border border-light ml-auto" variant="dark">Masuk</Button>
                        <Button className="h-25 d-inline-block ml-1 border border-secondary" variant="light">Tidak Dapat Masuk ?</Button>
                    </div>
                    <div className="row ml-4 mr-4 mt-5">
                        <h3>Pelajari FAQ</h3>
                        <Button className="h-25 d-inline-block border border-light ml-5" variant="dark">Lihat selengkapnya</Button>
                    </div>
                </div>
        )
    }
}

export default Bantuan