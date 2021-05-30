import React from 'react'
import { Carousel, } from 'react-bootstrap'


class carousel extends React.Component {

    render() {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/k3koEo7k-ZA/maxresdefault.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://asset.kompas.com/crops/M-Izo4W7xJAeWmWGJTr4_VX1oK4=/163x8:952x533/750x500/data/photo/2020/09/15/5f6081dc6df12.jpg"
                        alt="Two slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/9NI4yeTI5fE/maxresdefault.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default carousel

