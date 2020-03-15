import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import "../pages/pages.css";

const Portfolio = () => {
    return (
        <body>
            <div>
                <Navbar></Navbar>
                <Card style={{ width: '60rem' }}>
                    <Card.Body>
                        <Card.Title>A Few Of My Projects</Card.Title>
                        <Card.Text>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="WeatherDash.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </body>
    )
}

export default Portfolio;