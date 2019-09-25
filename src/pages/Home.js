import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Cards from '../Components/Cards'
import  Footers from '../Components/Footers'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Cards />
                <Footers/>
            </div>
        )
    }
}

export default Home