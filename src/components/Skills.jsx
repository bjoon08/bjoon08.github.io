import "animate.css";
import { Tab, Nav } from "react-bootstrap";
import { SkillCard } from "./SkillCard";
import { KillCard } from "./KillCard";
import { IllCard } from "./IllCard";
import devIcon1 from "../assets/img/dev-icons/python.svg";
import devIcon2 from "../assets/img/dev-icons/javascript.svg";
import devIcon3 from "../assets/img/dev-icons/html.svg";
import devIcon4 from "../assets/img/dev-icons/css.svg";
import devIcon5 from "../assets/img/dev-icons/reactjs.svg";
import devIcon6 from "../assets/img/dev-icons/django.svg";
import devIcon7 from "../assets/img/dev-icons/docker.svg";
import devIcon8 from "../assets/img/dev-icons/postgresql.svg";
import devIcon9 from "../assets/img/dev-icons/fastapi.svg";
import devIcon10 from "../assets/img/dev-icons/bootstrap.svg";
import devIcon11 from "../assets/img/dev-icons/tailwind.svg";
import devIcon12 from "../assets/img/dev-icons/material.svg";
import devIcon13 from "../assets/img/dev-icons/mongodb.svg";
import devIcon14 from "../assets/img/dev-icons/redux.svg";
import devIcon15 from "../assets/img/dev-icons/rabbitmq.svg";
import devIcon16 from "../assets/img/dev-icons/swift.svg";
import devIcon17 from "../assets/img/dev-icons/bash.svg";

export const Skills = () => {
    const feSkills = [
        {
            title: "JavaScript",
            imgUrl: devIcon2,
        },
        {
            title: "ReactJS",
            imgUrl: devIcon5,
        },
        {
            title: "Redux",
            imgUrl: devIcon14,
        },
        {
            title: "Swift",
            imgUrl: devIcon16,
        },
        {
            title: "HTML",
            imgUrl: devIcon3,
        },
        {
            title: "CSS",
            imgUrl: devIcon4,
        },
        {
            title: "Bootstrap",
            imgUrl: devIcon10,
        },
        {
            title: "Tailwind",
            imgUrl: devIcon11,
        },
        {
            title: "MaterialUI",
            imgUrl: devIcon12,
        },
    ];

    const beSkills = [
        {
            title: "Python",
            imgUrl: devIcon1,
        },
        {
            title: "FastAPI",
            imgUrl: devIcon9,
        },
        {
            title: "Django",
            imgUrl: devIcon6,
        },
        {
            title: "JavaScript",
            imgUrl: devIcon2,
        },
        {
            title: "Swift",
            imgUrl: devIcon16,
        },
    ];

    const addSkills = [
        {
            title: "BASH",
            imgUrl: devIcon17,
        },
        {
            title: "Docker",
            imgUrl: devIcon7,
        },
        {
            title: "RabbitMQ",
            imgUrl: devIcon15,
        },
        {
            title: "PostgreSQL",
            imgUrl: devIcon8,
        },
        {
            title: "MongoDB",
            imgUrl: devIcon13,
        },
    ]

    return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <div>
                        <h2>Skills</h2>
                        <p>Below is a list of langauges and skills I have acquired so far.<br></br> I want to add percentages to show confidence in knowledge.</p>
                        </div>
                    <Tab.Container id="skills-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Front end</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Back End</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Additional</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="row">
                                    {feSkills.map((feSkill, index) => {
                                        return (
                                            <SkillCard
                                                key={index}
                                                {...feSkill}
                                            />
                                        )
                                    })}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="row">
                                    {beSkills.map((beSkill, index) => {
                                        return (
                                            <KillCard
                                                key={index}
                                                {...beSkill}
                                            />
                                        )
                                    })}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className="row">
                                    {addSkills.map((addSkill, index) => {
                                        return (
                                            <IllCard
                                                key={index}
                                                {...addSkill}
                                            />
                                        )
                                    })}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
