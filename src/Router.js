import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footers from "./Components/Footers";
import Home from './pages/Home'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Bantuan from './pages/PusatBantuan';

class AppRouter extends React.Component {
  render() {
    return (
        <Router>
            <Header />
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/PusatBantuan" component={Bantuan} />
            </div>
            <Footers />
        </Router>
      )
  }
}

export default AppRouter;