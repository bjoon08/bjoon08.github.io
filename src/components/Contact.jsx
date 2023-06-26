import { useRef, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Joon from '../assets/img/Joon.jpg'
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const Contact = () => {
    const form = useRef();

    const formInitialDetails = {
        name: '',
        prefName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => {
                console.log(result.text)
                // form.current.reset();
                setFormDetails(formInitialDetails);
                toast.success('Email has been sent!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    backgroundColor: "#75563a",
                    });
                const homeSection = document.getElementById("home");
                if (homeSection) {
                    homeSection.scrollIntoView({ behavior: "smooth" });
                }
            },
            error => console.log(error.text)
        );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={Joon} alt="Contact Me" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="full_name"
                                        value={formDetails.name}
                                        placeholder="Name"
                                        onChange={(e) => onFormUpdate('name', e.target.value)}
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="pref_name"
                                        value={formDetails.prefName}
                                        placeholder="Preferred Name"
                                        onChange={(e) => onFormUpdate('prefName', e.target.value)}
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        name="user_email"
                                        value={formDetails.email}
                                        placeholder="Email"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        name="phone_no"
                                        value={formDetails.phone}
                                        placeholder="Phone No."
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                    <button value="Send" type="submit"><span>Send</span></button>
                                </Col>
                                {/* {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}
                                        </p>
                                    </Col>
                                } */}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
