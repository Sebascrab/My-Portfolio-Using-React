
// imports for react-boostrap and images
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/Space-Fighter.svg";
import { useState, useEffect } from "react";
import profilePic from "../assets/images/Sebas-dog.jpeg"



// for the deleting welcome text:
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
        // html for main banner page
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={5}>
                    <div class="banner-name">Sebastian Tischner</div>
                        <div className="plane">
                        <img src={headerImg} alt="Header IMG" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="right-col">
                        <div className="profile">
                        <img src={profilePic}></img>
                        </div>
                        <div className="banner-info">
                            {/* deleting text */}
                        <h1>{`About Me: `}<span className="wrap">{text}</span></h1>
                        <p>Before learning how to code, I was enjoying a career in automotive sales here in Salt Lake at the Jaguar Land Rover dealership downtown. During my career, I had decided that I would like to learn a new skill set in technology. One that would challenge me, and allow me to work on projects with like minded individuals. Six months ago, I decided to begin my coding journey with the University of Utah's coding bootcamp, and have loved every minute of it! I am looking forward to a career in web development where I am valued as a dependable team member, in a work environment that promotes growth.
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>

    )
}