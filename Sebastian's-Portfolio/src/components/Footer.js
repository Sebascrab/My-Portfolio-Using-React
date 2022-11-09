
// imports for react-boostrap and images:
import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/Logo-150px1.png"
import github from "../assets/images/GitHub-Mark-Light-32px.png"
import linkedin from "../assets/images/linkedin-32.png"





export const Footer = () => {
    // html for footer
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img className="footer-logo" src={logo} alt="Logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/Sebascrab" target="_blank"><img src={github} alt="github logo" /></a>
                            <a href="https://www.linkedin.com/in/sebastian-tischner-%E6%9E%97%E5%81%BC%E8%8A%83-069b519a" target="_blank"><img src={linkedin} alt="linkedin logo" /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved By <a href="https://github.com/Sebascrab" target="_blank"> Sebastian Tischner</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}