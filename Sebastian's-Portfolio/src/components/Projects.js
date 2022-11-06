

import Nav from 'react-bootstrap/Nav';
import { Col, Container, Tab } from 'react-bootstrap'
import { ProjectCard } from "./ProjectCard";

import cornerEV from '../assets/images/ProjectImages/Your-Corner-EV.png'
import crowdControl from '../assets/images/ProjectImages/Crowd-Control.png'
import weatherAPI from '../assets/images/ProjectImages/Weather-API-Screenshot.png'
import teamProfile from '../assets/images/ProjectImages/Team-Profile-Generator-With-Node.png'
import workDay from '../assets/images/ProjectImages/Sebastian-Work-Day-Scheduler.png'
import jsGame from '../assets/images/ProjectImages/Sebastian-JS-Game.png'



export const Projects = () => {

    const projects = [
        {
            title: "Your Corner EV",
            description: "EV station finder",
            imgUrl: cornerEV,
        },
        {
            title: "Crowd Control",
            description: "Customer Managment System",
            imgUrl: crowdControl,
        },
        {
            title: "Weather Forecast App",
            description: "Weather forecast for any city",
            imgUrl: weatherAPI,
        },
        {
            title: "Team Profile Generator",
            description: "Application to track employee information",
            imgUrl: teamProfile,
        },
        {
            title: "Work Day Scheduler",
            description: "Scheduler for your own work day",
            imgUrl: workDay,
        },
        {
            title: "Javascript Game",
            description: "Multiple choice javascript game",
            imgUrl: jsGame
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of the projects that I have worked on! Feel free to see the applicaitons in action, or to look over the repository!</p>
                        <Tab.container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}