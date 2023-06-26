import { Col, Container, Row } from 'react-bootstrap';
// import { MailchimpForm } from './MailchimpForm';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Joon from '../assets/img/Joon.jpg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    {/* <MailchimpForm /> */}
                    <div><br /></div>
                    <Col sm={6}>
                        <img className="footer-img" src={Joon} alt="" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/joonhyukjang/"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/brandon.jang.56"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/b.jjoon/"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
