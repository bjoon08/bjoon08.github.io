import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="pr-im">
                <div className="proj-imgbx">
                    <img className='imgbx-proj' src={imgUrl} alt="" />
                    <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    </div>
                </div>
                <a href={projUrl} target="_blank" rel="noreferrer"><button>Project Code</button></a>
            </div>
        </Col>
    )
}
