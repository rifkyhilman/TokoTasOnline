import React from 'react'
import Carousel from '../Components/Carousel'
import Cards from '../Components/Cards'
import Tabs from '../Components/Tabs'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Tabs />
                <Carousel />
                <Cards />
            </div>
        )
    }
}

export default Home