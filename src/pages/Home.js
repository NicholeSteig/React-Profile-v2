import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import "../pages/pages.css"

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Card style={{ width: '60rem' }}>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Blah blah blah
            </Card.Text>
            </Card>
        </div>
    )
}

export default Home;