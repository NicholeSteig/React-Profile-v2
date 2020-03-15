import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import "./pages/pages.css"
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


function App() {
    return (
        <Router>
            <div className="container">
                {/* <Navbar /> */}
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;