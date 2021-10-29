import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function CardItem(props) {
    return (
        <>
            <li className='cards_home__item'>
                <Link className='cards_home__item__link' to={props.path} target='_blank'>
                    <figure className='cards_home__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards_home__item__img'
                            alt='Images'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards_home__item__info'>
                        <h5 className='cards_home__item__text'>{props.text}</h5>
                        <Container>
                            <Row>
                                <Col>
                                    <Link
                                        to={props.path}
                                        target='_blank'
                                    >
                                        LIVE
                                    </Link>
                                </Col>
                                <Col>
                                    <Link
                                        to={props.source}
                                        target='_blank'
                                    >
                                        Source
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;
