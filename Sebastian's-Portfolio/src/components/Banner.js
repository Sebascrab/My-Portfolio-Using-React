import { Container, Row } from "react-bootstrap"




export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs="{12}" md="{6}" xl="{7}">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm webcoded`}<span className="wrap">web developer</span></h1>
                        <p>Hey there, my name is Sebastian and I am excited to code and lot of random stuff......................................</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}