import { Col, Container, Row } from "react-bootstrap"
import roverImg from "../assets/images/LunarRover.png"




export const Resume = () => {

    return(
        <section className="resume" id="resume-page">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <h2>Resume</h2>
                        <div className="resume-box">
                            <div className="visit-resume">
                                <h4>Click the link down below to view my resume.</h4>
                            </div>
                            <div className="download-resume">
                                <h4>If you'd like to download it, there's a link for that too!</h4>
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