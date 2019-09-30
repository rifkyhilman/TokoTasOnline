import React from 'react'
import { Link } from 'react-router-dom'

class Footers extends React.Component {
    render() {
        return (
        <div>
            <div className="kaki main-footer">
                <div className="container">
                    <div className="row">
                    {/* <div>Navbar</div> */}
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
                                <li><Link class="text-muted">loream1</Link></li>
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