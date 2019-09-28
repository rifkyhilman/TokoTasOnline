import React from 'react'

class Footers extends React.Component {
    render() {
        return (
        <div>
            <div className="kaki main-footer">
                <div className="container">
                    <div className="row">
                    <div>Navbar</div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                            <ul className="list-unstyled">
                                <li>loream1</li>
                                <li>loream2</li>
                                <li>loream3</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                            <ul className="list-unstyled">
                                <li>loream1</li>
                                <li>loream2</li>
                                <li>loream3</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                            <ul className="list-unstyled">
                                <li>loream1</li>
                                <li>loream2</li>
                                <li>loream3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} City Guide App - All Rights 
                </p>
            </div>
        </div>
        )
    }
}

export default Footers