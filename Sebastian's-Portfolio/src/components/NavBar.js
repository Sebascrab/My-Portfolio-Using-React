import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

import logo from '../assets/images/Logo-150px1.png'
import githubIcon from '../assets/images/GitHub-Mark-Light-32px.png'
import linkedinIcon from '../assets/images/linkedin-32.png'
import DropdownItem from "react-bootstrap/esm/DropdownItem";


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

    const DropdownItem = (props) => {
        return(
            <li className="dropdownItem">
                <p>Sebastian Tischner</p>
                
            </li>
        )
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
                        <Nav.Link href="#resume-page" className={activeLink === 'resume-page' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume-page')}>Resume</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Sebascrab" target="_blank"><img src={githubIcon} alt="githubIcon" /></a>
                            <a href="https://www.linkedin.com/in/sebastian-tischner-%E6%9E%97%E5%81%BC%E8%8A%83-069b519a" target="_blank"><img src={linkedinIcon} alt="linkedinIcon" /></a>
                        </div>
                        <button><span>Contact Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}