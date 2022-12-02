

// import Nav from 'react-bootstrap/Nav';
import { Col, Container, Tab, Row, } from "react-bootstrap"
import { ProjectCard } from "./ProjectCards";
import Nav from 'react-bootstrap/Nav';


import cornerEV from '../assets/images/ProjectImages/Your-Corner-EV.png'
import crowdControl from '../assets/images/ProjectImages/Crowd-Control.png'
import weatherAPI from '../assets/images/ProjectImages/Weather-API-Screenshot.png'
import teamProfile from '../assets/images/ProjectImages/Team-Profile-Generator-With-Node.png'
import workDay from '../assets/images/ProjectImages/Work-Day-Scheduler.png'
import jsGame from '../assets/images/ProjectImages/Sebastian-JS-Game.png'
import keepUp from '../assets/images/ProjectImages/Keep-Up-Screenshot.png'
import employeeTracker from '../assets/images/ProjectImages/Employee-Tracker-Screenshot.png'
import socialAPI from '../assets/images/ProjectImages/Social-Network-API.png'

// objects storing projects info:
export const Projects = () => {

    const groupProjects = [
        {
            title: "Your Corner EV",
            description: "EV station finder",
            imgUrl: cornerEV,
            githubUrl: "https://github.com/Sebascrab/Your-Corner-EV-Group-Project-1",
            deployedUrl: "https://sebascrab.github.io/Your-Corner-EV-Group-Project-1/"
        },
        {
            title: "Crowd Control",
            description: "Customer managment System",
            imgUrl: crowdControl,
            githubUrl: "https://github.com/Sebascrab/Crowd-Cntrl-Group-Project-2",
            deployedUrl: "https://crowdcntrl.herokuapp.com/"
        },
        {
            title: "Keep Up",
            description: "Social media Application",
            imgUrl: keepUp,
            githubUrl: "https://github.com/Sebascrab/Group-Project-3",
            deployedUrl: "https://keep-up-project-3.herokuapp.com/",
        }
        // {
        //     title: "Weather Forecasting App",
        //     description: "Weather forecast for any city",
        //     imgUrl: weatherAPI,
        //     githubUrl: "https://github.com/Sebascrab/Weather-Forecast-With-OpenWeather-API",
        //     deployedUrl: "https://sebascrab.github.io/Weather-Forecast-With-OpenWeather-API/"
        // },
        
    ];

    const personalProjects = [
        {
            title: "Team Profile Generator",
            description: "Track employee information",
            imgUrl: teamProfile,
            githubUrl: "https://github.com/Sebascrab/Team-Generator-With-Node.js",
            deployedUrl: "https://drive.google.com/file/d/19Sz39bsVk171Iejn_dEj8CkpUQwoyqr-/view"
        },
        {
            title: "Work Day Scheduler",
            description: "Scheduler for your own work day",
            imgUrl: workDay,
            githubUrl: "https://github.com/Sebascrab/Work-Day-Scheduler-Using-Third-Party-APIs",
            deployedUrl: "https://sebascrab.github.io/Work-Day-Scheduler-Using-Third-Party-APIs/"
        },
        {
            title: "Javascript Game",
            description: "Multiple choice javascript game",
            imgUrl: jsGame,
            githubUrl: "https://github.com/Sebascrab/Multiple-Choice-Javascript-Game",
            deployedUrl: "https://sebascrab.github.io/Multiple-Choice-Javascript-Game/"
        },
    ];

    const moreProjects =[
        {
            title: "Weather Forecasting App",
            description: "Weather forecast for any city",
            imgUrl: weatherAPI,
            githubUrl: "https://github.com/Sebascrab/Weather-Forecast-With-OpenWeather-API",
            deployedUrl: "https://sebascrab.github.io/Weather-Forecast-With-OpenWeather-API/"
        },
        {
            title: "mySQL Employee Tracker",
            description: "Backend employee database",
            imgUrl: employeeTracker,
            githubUrl: "https://github.com/Sebascrab/Employee-Tracker-Using-SQL",
            deployedUrl: "https://drive.google.com/file/d/19Sz39bsVk171Iejn_dEj8CkpUQwoyqr-/view"

        },
        {
            title: "Social Network API",
            description: "noSQL for social media app",
            imgUrl: socialAPI,
            githubUrl: "https://github.com/Sebascrab/NoSQL-Social-Network-API-MongoDB",
            deployed: "https://drive.google.com/file/d/1X0Zm6xT6Q08IVuDT7rrUa7IaJIyS0C-s/view"
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <div className="project-info">
                        <h2>Projects</h2>
                        <p>Here are some of the projects that I have worked on! Feel free to see the applicaitons in action, or to look over the repository!</p>
                        </div>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Group Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">My Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">More Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            groupProjects.map((project, index) => {
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
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            personalProjects.map((project, index) => {
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
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            moreProjects.map((project, index) => {
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
                                
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}