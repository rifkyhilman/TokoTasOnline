import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Logo from '../Image/discount.png'

class Cards extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info" >
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">20%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Vans Tinggi Hitam</Card.Title>
                                        <Card.Text className="font">
                                            Rp 1.209.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 899.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=343&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">35%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Vans Merah</Card.Title>
                                        <Card.Text className="font">
                                            Rp 1.549.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 999.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1548863227-3af567fc3b27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">55%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Tote Bag Putih</Card.Title>
                                        <Card.Text className="font">
                                            Rp 59.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 20.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1618860104306-afcff5629f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">35%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Sepatu Sekolah</Card.Title>
                                        <Card.Text className="font">
                                            Rp 200.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 149.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">30%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Jam Tangan Pria</Card.Title>
                                        <Card.Text className="font">
                                            Rp 249.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 109.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">20%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Sepatu High Hell Wanita</Card.Title>
                                        <Card.Text className="font">
                                            Rp 449.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 379.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">35%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Tas Wanita Merah</Card.Title>
                                        <Card.Text className="font">
                                            Rp 249.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 199.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=377&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">30%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Tas Wanita Oren</Card.Title>
                                        <Card.Text className="font">
                                            Rp 249.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 199.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">50%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Tote Bag Hitam</Card.Title>
                                        <Card.Text className="font">
                                            Rp 80.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 40.900
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="LastCard">
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">10%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Tas Ransel Pria</Card.Title>
                                        <Card.Text className="font">
                                            Rp 249.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 159.900
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="LastCard">
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">20%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Tas Wanita</Card.Title>
                                        <Card.Text className="font">
                                            Rp 849.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 600.900,00
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="LastCard">
                            <Link to="/Jualan">
                                <Card className="card text-center bg-info">
                                    <Card.Img className="imgCards" variant="top" src="https://images.unsplash.com/photo-1612504722323-28ae76e4ac47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                                    <Card.ImgOverlay>
                                        <div className="d-flex justify-content-start">
                                            <Card.Title className="discount">50%</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Body className="text-white">
                                        <Card.Title class="font-weight-bold">Jam Tangan Couple</Card.Title>
                                        <Card.Text className="font">
                                            Rp 1.649.900,00
                                        </Card.Text>
                                        <Card.Text>
                                            Rp 800.000,00
                                         </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cards