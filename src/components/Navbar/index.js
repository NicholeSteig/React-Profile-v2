import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import "../../pages/pages.css";

function Navbar() {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Nichole Steig</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;