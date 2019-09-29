import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'


class Teb extends React.Component {
    render() {
        return (
        <div className="teb body-teb">
            <Tabs id="uncontrolled-tab-example">
                <Tab className="x" title="Home">
                </Tab>
                <Tab className="x" title="Profile">
                </Tab>
                <Tab className="x" title="Contact">
                </Tab>
            </Tabs>
        </div>
        )
    }
}

export default Teb