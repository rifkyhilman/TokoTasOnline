import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

class Footers extends React.Component {
    render() {
        return (
            <div>
                <div className="kaki main-footer">
                    <div className="container">
                        <div className="row">
                            <div>
                                <h2 className="navbar-brand mb-1" to="/" >Crowded</h2>
                            </div>
                            {/* <div>Navbar</div> */}
                            <div className="col-md-3 ml-auto">
                                <ul className="list-unstyled">
                                    <h5>Hubungi Kami</h5>
                                    <li><Link class="text-muted">089628661621</Link></li>
                                    <li><Link class="text-muted">loream1</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled">
                                    <h5>Contac Us</h5>
                                    <li><Link class="text-muted">instagram</Link></li>
                                    <li><Link class="text-muted">loream1</Link></li>
                                    <li><Link class="text-muted">loream1</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled">
                                    <h5>Contac Us</h5>
                                    <li><Link class="text-muted"> </Link></li>
                                    <li><Link class="text-muted">loream1</Link></li>
                                    <li><Link class="text-muted">loream1</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} By Rifki Hilman
                </p>
                </div>
            </div>
        )
    }
}

export default Footers