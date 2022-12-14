import { Col } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCards"

export const ProjectCard = ({ title, description, imgUrl, githubUrl, deployedUrl }) => {
// project cards that are mapped into project.js
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br></br>
                    <a href={githubUrl} target="_blank">GitHub Link</a><br></br>
                    <a href={deployedUrl} target="_blank">Deployed Link</a>
                </div>
            </div>
        </Col>
    )
}