import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img/conference-go.png";
import projImg2 from "../assets/img/project-img/carcar.png";
import projImg3 from "../assets/img/project-img/smash2.png";
import pineapple from "../assets/img/project-img/Pineapple Budget.png"
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import javaScript from "../assets/img/dev-icons/javascript.svg";
import pyThon from "../assets/img/dev-icons/python.svg";
import reaCt from "../assets/img/dev-icons/reactjs.svg";
import docKer from "../assets/img/dev-icons/docker.svg";
import bootStrap from "../assets/img/dev-icons/bootstrap.svg";
// import tailWind from "../assets/img/dev-icons/tailwind.svg";
import viTe from "../assets/img/dev-icons/vitejs.svg";
import typeScript from "../assets/img/dev-icons/typescript.svg";
import cSs from "../assets/img/dev-icons/css.svg";

// import TrackVisibility from "react-on-screen";
import "animate.css"

export const Projects = () => {
    const conGo = 'https://gitlab.com/bjoon08/conference-go';
    const carCar = 'https://gitlab.com/bjoon08/project-beta';
    const bangOnly = 'https://gitlab.com/bangerz-only/bangerz-only';
    const pine = 'https://gitlab.com/bjoon08/pineapple-budget';

    const projects = [
        {
            title: "Conference Go",
            description: "Design & Development",
            imgUrl: projImg1,
            projUrl: conGo,
            coDe: pyThon,
            coDeprc: "49.9%",
            coDe1: javaScript,
            coDe1prc: "49.9%",
            coDe2: reaCt,
            coDe3: docKer,
            coDe4: bootStrap,
            coDe4prc: "0.2%"
        },
        {
            title: "CarCar",
            description: "Design & Development",
            imgUrl: projImg2,
            projUrl: carCar,
            coDe: pyThon,
            coDeprc: "50.7%",
            coDe1: javaScript,
            coDe1prc: "47.7%",
            coDe2: reaCt,
            coDe3: docKer,
            coDe4: bootStrap,
            coDe4prc: "1.6%",
        },
        {
            title: "Bangerz Only",
            description: "Design, Development, & Deployment",
            imgUrl: projImg3,
            projUrl: bangOnly,
            coDe: pyThon,
            coDeprc: "30.9%",
            coDe1: javaScript,
            coDe1prc: "45.7%",
            coDe2: reaCt,
            coDe3: docKer,
            coDe4: cSs,
            coDe4prc: "23.4%",
        },
    ];

    const brojects = [
        {
            title: "Pineapple Budget",
            description: "Frontend Design and Development",
            imgUrl: pineapple,
            projUrl: pine,
            coDe: typeScript,
            coDeprc: "70.5%",
            coDe1: reaCt,
            coDe2: viTe,
            coDe3: cSs,
            coDe3prc: "29.5%",
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
