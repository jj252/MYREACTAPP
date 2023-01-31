import {  Card, CardImg, CardImgOverlay, CardTitle, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import myImage from '../app/assets/img/me.jpg';
import {liStyle} from '../app/myStyleSheet';
import style from '../app/StudentList.module.css';



const Misc = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h5 className={style.details}>Page Content</h5>
                    <Card>
                        <CardImg className={style.resize} width='50%' src={myImage} alt='ccna_exploration4'/>
                        <CardImgOverlay>
                            <CardTitle style={liStyle}>Welcome</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
            
    )
    
}

export default Misc;

