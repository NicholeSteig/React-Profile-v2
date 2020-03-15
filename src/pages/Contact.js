import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import "../pages/pages.css";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Card style={{ width: '60rem' }}>
                <Card.Body>
                    <Card.Title>Contact Me</Card.Title>
                    <Card.Text>
                    <ListGroup variant="flush">
    <ListGroup.Item><Card.Link href="https://www.linkedin.com/in/nichole-steig-b3594085/">LinkedIn</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="https://github.com/NicholeSteig">GitHub</Card.Link></ListGroup.Item>
    <ListGroup.Item><Card.Link href="mailto:nichole.steig@gmail.com">Email</Card.Link></ListGroup.Item>
  </ListGroup>
    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;