import { Col, Container, Row } from "react-bootstrap"
import roverImg from "../assets/images/LunarRover.png"
import resumeImg from "../assets/images/Sebastian-Resume2.png"
import { Link } from 'react-router-dom';




export const Resume = () => {

    return(
        <section className="resume" id="resume-page">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <h2>Resume</h2>
                        <div className="resume-box">
                            {/* resume view */}
                            <div className="visit-resume">
                                <h4>Click down below to view my resume.</h4>
                                <a href="https://sebastian-tischner-resume-2022.my.canva.site/" target="_blank">
                                <img src={resumeImg} />
                                </a>
                            </div>
                            {/* resume download */}
                            <div className="download-resume">
                                <h4>If you'd like to download it, there's a link for that too!</h4>
                                <a href={resumeImg} download="Sebastian Tischner Resume"><img src={resumeImg} /></a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className="rover">
                        <img src={roverImg}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}