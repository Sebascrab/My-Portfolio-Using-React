
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
                        <p>Front-end Web Developer capitalizing on a strong sales background willing to ask the right questions, and come up with the solutions necessary to build a great user experience.
                             I greatly enjoy web development and have recently earned a certificate in full stack development from the University of Utah’s coding bootcamp.
                              During my education, I have learned strong skills on front-end web languages such as: HTML5, CSS, Javascript, and React. Back-end frameworks that I have also learned include: mySQL, Node.js, Sequelize, Express.js and more.  My favorite thing about web development
                              and coding is the problem solving aspect. Similar to sales, there is an enormous amount of gratification in problem solving, and creating projects.
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>

    )
}