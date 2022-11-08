import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

import logo from '../assets/images/Logo-150px1.png'
import githubIcon from '../assets/images/GitHub-Mark-Light-32px.png'
import linkedinIcon from '../assets/images/linkedin-32.png'


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const dropDown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          let dropdowns = document.getElementsByClassName("dropdown-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img class="logoimg" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Sebascrab" target="_blank"><img src={githubIcon} alt="githubIcon" /></a>
                            <a href="https://www.linkedin.com/in/sebastian-tischner-%E6%9E%97%E5%81%BC%E8%8A%83-069b519a"><img src={linkedinIcon} alt="linkedinIcon" /></a>
                        </div>
                        <button href="#connect" className="vvd" onClick={() => console.log('connect')}><span>Contact Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}