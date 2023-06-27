import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img/project-img1.png";
import projImg2 from "../assets/img/project-img/project-img2.png";
import projImg3 from "../assets/img/project-img/project-img3.png";
import pineapple from "../assets/img/project-img/Pineapple Budget.png"
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
// import TrackVisibility from "react-on-screen";
import "animate.css"

export const Projects = () => {
    const projects = [
        {
            title: "Conference Go",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "CarCar",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Bangerz Only",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    const brojects = [
        {
            title: "Pineapple Budget",
            description: "Frontend Design and Development",
            imgUrl: pineapple,
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col className="project-bx">
                    {/* <TrackVisibility> */}
                        {/* {({ isVisible }) => */}
                        <div>
                            <h2>Projects</h2>
                            <p>Please check both tabs for project info!</p>
                        </div>
                    {/* </TrackVisibility> */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Fullstack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Front End</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                    brojects.map((broject, index) => {
                                        return (
                                        <ProjectCard2
                                            key={index}
                                            {...broject}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
