import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img className='imgbx-proj' src={imgUrl} alt="" />
                <div>
                    <h5>{title}</h5>
                </div>
                <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
