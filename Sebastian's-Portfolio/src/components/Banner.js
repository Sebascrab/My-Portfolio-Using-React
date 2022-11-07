import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/Space-Fighter.svg";
import { useState, useEffect } from "react";




export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Hi, I'm Sebastian", " Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1); 
            setDelta(250);
        };
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={5}>
                <div class="banner-name">Sebastian Tischner</div>
                        <img src={headerImg} alt="Header IMG" />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`About Me: `}<span className="wrap">{text}</span></h1>
                        <p>Front-end Web Developer capitalizing on a strong sales background willing to ask the right questions, and come up with the solutions necessary to build a great user experience.
                             I greatly enjoy web development and have recently earned a certificate in full stack development from the University of Utah’s coding bootcamp.
                              During my education, I have learned strong skils on front-end web languages such as: HTML5, CSS, Javascript, and React.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    
                </Row>
            </Container>
        </section>

    )
}