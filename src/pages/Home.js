import React from 'react'
import Carousel from '../Components/Carousel'
import Cards from '../Components/Cards'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel />
                <Cards />
            </div>
        )
    }
}

export default Home