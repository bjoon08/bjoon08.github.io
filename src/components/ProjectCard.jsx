import { Col } from 'react-bootstrap'

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    projUrl,
    coDe,
    coDeprc,
    coDe1,
    coDe1prc,
    coDe2,
    coDe3,
    coDe4,
    coDe4prc,
}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="pr-im">
                <div className="proj-imgbx">
                    <img className='imgbx-proj' src={imgUrl} alt="" />
                    <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <div className="proj-display">
                        <div>
                            <img className='proj-txtx-img' src={coDe} alt="" />
                            <p>{coDeprc}</p>
                        </div>
                        <div>
                            <img className='proj-txtx-img' src={coDe1} alt="" />
                            <p>{coDe1prc}</p>
                        </div>
                        <div>
                            <img className='proj-txtx-img' src={coDe4} alt="" />
                            <p>{coDe4prc}</p>
                        </div>
                        <div>
                            <img className='proj-txtx-img' src={coDe2} alt="" />
                        </div>
                        <div>
                            <img className='proj-txtx-img' src={coDe3} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                <a href={projUrl} target="_blank" rel="noreferrer"><button>Project Code</button></a>
            </div>
        </Col>
    )
}
