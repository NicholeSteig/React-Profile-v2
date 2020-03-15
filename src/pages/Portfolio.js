import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import "../pages/pages.css";
import weatherpic from "../pages/WeatherDash.jpg";
import todopic from "../pages/ToDo.jpg";
import hostingpic from "../pages/Hosting.png";
import smartrecipepic from "../pages/smart-recipe.png";

const Portfolio = () => {
    return (
        <body>
            <div>
                <Navbar></Navbar>
                <Card style={{ width: '60rem' }}>
                    <Card.Body>
                        <Card.Title>A Few Of My Projects</Card.Title>
                        <Card.Text>
                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={weatherpic} />
                                <Card.Body>
                                    <Card.Title>Weather Dashboard</Card.Title>
                                    <Card.Text>
                                        This is an app I built using the Open Weather api. It shows the current weather
                            and 5-day forecast for a given city.
    </Card.Text>
                                    <Card.Link href="https://nicholesteig.github.io/Homework-6/">App</Card.Link>
                                    <Card.Link href="https://github.com/NicholeSteig/Homework-6">GitHub</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={todopic} />
                                <Card.Body>
                                    <Card.Title>Hourly Planner</Card.Title>
                                    <Card.Text>
                                    This is a planner app. It has slots for each hour from 9 am to 5 pm in which
                        text can be inputted and saved.
    </Card.Text>
                                    <Card.Link href="https://nicholesteig.github.io/Homework-5/">App</Card.Link>
                                    <Card.Link href="https://github.com/NicholeSteig/Homework-5">GitHub</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={hostingpic} />
                                <Card.Body>
                                    <Card.Title>Hosting</Card.Title>
                                    <Card.Text>
                                    This is a project I worked on with several of my classmates. It's an app that
                        can be used to search for recipes for food and cocktails based on searched-for ingredients.
    </Card.Text>
                                    <Card.Link href="https://atdiep.github.io/Hosting-App/">App</Card.Link>
                                    <Card.Link href="https://github.com/atdiep/Hosting-App">GitHub</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={smartrecipepic} />
                                <Card.Body>
                                    <Card.Title>My Smart Recipe</Card.Title>
                                    <Card.Text>
                                    This is an app that uses photo recognition to find recipes for desired foods. When a user takes a picture of food, the app pulls up recipes.
    </Card.Text>
                                    <Card.Link href="https://uwcodingproject2.herokuapp.com/">App</Card.Link>
                                    <Card.Link href="https://github.com/jiahuithegrey/20191221-Project-2">GitHub</Card.Link>
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