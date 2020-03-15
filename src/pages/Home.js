import React from "react";
import API from "../Util/API";
import Navbar from "../Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

const Home = () => {
    return (
        <div>
            {/* <body background="../assets/background-blur-clean-clear-531880.jpg"></body> */}
            <Card style={{ width: '30rem' }}>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Blah blah blah
            </Card.Text>
            </Card>
        </div>
    )
}

export default Home;