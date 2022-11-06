

// import Nav from 'react-bootstrap/Nav';
import { Col, Container, Tab, Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCards";
import Nav from 'react-bootstrap/Nav';

import cornerEV from '../assets/images/ProjectImages/Your-Corner-EV.png'
import crowdControl from '../assets/images/ProjectImages/Crowd-Control.png'
import weatherAPI from '../assets/images/ProjectImages/Weather-API-Screenshot.png'
import teamProfile from '../assets/images/ProjectImages/Team-Profile-Generator-With-Node.png'
import workDay from '../assets/images/ProjectImages/Sebastian-Work-Day-Scheduler.png'
import jsGame from '../assets/images/ProjectImages/Sebastian-JS-Game.png'



export const Projects = () => {

    // const groupProjects = [
    //     {
    //         title: "Your Corner EV",
    //         description: "EV station finder",
    //         imgUrl: cornerEV,
    //     },
    //     {
    //         title: "Crowd Control",
    //         description: "Customer Managment System",
    //         imgUrl: crowdControl,
    //     },
    //     {
    //         title: "Weather Forecast App",
    //         description: "Weather forecast for any city",
    //         imgUrl: weatherAPI,
    //     },
        
    // ];

    // const personalProjects = [
    //     {
    //         title: "Team Profile Generator",
    //         description: "Application to track employee information",
    //         imgUrl: teamProfile,
    //     },
    //     {
    //         title: "Work Day Scheduler",
    //         description: "Scheduler for your own work day",
    //         imgUrl: workDay,
    //     },
    //     {
    //         title: "Javascript Game",
    //         description: "Multiple choice javascript game",
    //         imgUrl: jsGame
    //     },
    // ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of the projects that I have worked on! Feel free to see the applicaitons in action, or to look over the repository!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Group Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">My Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                       
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third"></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}