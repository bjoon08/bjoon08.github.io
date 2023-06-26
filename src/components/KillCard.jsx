import { Col } from 'react-bootstrap';

export const KillCard = ({ title, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='skillcard-bx'>
                <img className='skillcard-bx2' src={imgUrl} alt="" />
                <div className='skillcard-text'>
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>
    )
}
