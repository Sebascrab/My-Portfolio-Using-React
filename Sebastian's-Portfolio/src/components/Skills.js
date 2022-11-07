import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import htmlIMG from "../assets/images/html5-plain-wordmark.svg"
import cssIMG from "../assets/images/css3-plain-wordmark.svg"
import jsIMG from "../assets/images/javascript-original.svg"
import recatIMG from "../assets/images/react-original-wordmark.svg"
import mysqlIMG from "../assets/images/mysql-original-wordmark.svg"
import nodejsIMG from "../assets/images/nodejs-original-wordmark.svg"
import githubIMG from "../assets/images/github-original-wordmark.svg"
import npmIMG from "../assets/images/npm-original-wordmark.svg"
import expIMG from "../assets/images/express-original-wordmark.svg"
import mongoIMG from "../assets/images/mongodb-plain-wordmark.svg"








export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
          <section className="skill" id="skills">
              <Container>
                  <Row>
                      <Col>
                       <div className="skill-bx">
                           <h2>
                               Learned Skills
                           </h2>
                           <p>
                               These are some of the languages that that I have used in my projects!<br></br>
                           </p>
                           <Carousel responsive={responsive} infinite={true} className="skills-slider">
                               <div className="item">
                                   <img src={htmlIMG} alt="html5 IMG"/>
                               </div>
                               <div className="item">
                                   <img src={cssIMG} alt="css IMG"/>
                               </div>
                               <div className="item">
                                   <img src={jsIMG} alt="javascript IMG"/>
                               </div>
                               <div className="item">
                                   <img src={recatIMG} alt="react IMG"/>
                               </div>
                               <div className="item">
                                   <img src={mysqlIMG} alt="mysql IMG"/>
                               </div>
                               <div className="item">
                                   <img src={nodejsIMG} alt="nodejs IMG"/>
                               </div>
                               <div className="item">
                                   <img src={githubIMG} alt="github IMG"/>
                               </div>
                               <div className="item">
                                   <img src={npmIMG} alt="npm IMG"/>
                               </div>
                               <div className="item">
                                   <img src={expIMG} alt="express IMG"/>
                               </div>
                               <div className="item">
                                   <img src={mongoIMG} alt="mongoDB IMG"/>
                               </div>
                           </Carousel>
                       </div>
                      </Col>
                  </Row>
                
              </Container>
             
          </section>
      )
}