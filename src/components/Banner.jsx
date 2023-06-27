

import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import headerImg from "../assets/img/header-img.svg"
import joon from "../assets/img/joon.svg";
import "animate.css"
import TrackVisibility from 'react-on-screen';
// import SongCard from './subcomponents/SongCard';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer", "Frontend Engineer", "Fullstack Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text]) // eslint-disable-line

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    function scrollToSection(connect) {
        const section = document.querySelector(connect);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className='tagline'>Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Brandon Jang,`}</h1>
                                <h2><span className='wrap'> {text}</span></h2>
                                <p>
                                    I am an ambitious <bold>full-stack software engineer</bold> based in Torrance, CA. As a recent graduate of HackReactor's
                                    Advanced Software Engineering program, I am now ready to embark on my professional journey in the tech industry.
                                    With a solid educational background and hands-on experience gained through rigorous projects, I am well-versed
                                    in the latest technologies. I am <bold>actively</bold> seeking my first professional opportunity, where I can apply my expertise,
                                    contribute to innovative projects, and thrive in a fast-paced, forward-thinking organization.
                                </p>
                                <button onClick={() => scrollToSection('#connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={joon} alt='Joon' />
                        {/* <SongCard /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
