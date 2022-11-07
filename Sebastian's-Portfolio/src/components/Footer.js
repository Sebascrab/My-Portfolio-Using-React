import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/Logo-150px1.png"





export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}