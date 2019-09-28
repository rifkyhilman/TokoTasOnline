import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'


class Teb extends React.Component {
    render() {
        return (
        <div className="body-teb">
        <Tabs id="uncontrolled-tab-example">
            <Tab className="teb" title="Home">
            </Tab>
            <Tab className="teb" title="Profile">
            </Tab>
            <Tab className="teb" title="Contact">
            </Tab>
        </Tabs>
        </div>
        )
    }
}

export default Teb