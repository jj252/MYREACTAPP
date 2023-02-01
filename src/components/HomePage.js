import {  Card, CardImg, CardImgOverlay, CardTitle, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import startup from '../app/assets/img/millystart.jpg';
import {liStyle} from '../app/myStyleSheet';
import style from '../app/StudentList.module.css';
//import { CreatedElement } from './CreatedElement';
import { createElement} from 'react';



function CreatedElement(names) {
    console.log('new Button Created');
    console.log(names);
    return createElement(
      'div',
      { className: 'greeting' },
      names.props + ' Hello World2'
    );
  }

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col className='col-12'>
                    <h5 className={style.details}>Page Content</h5>
                    <Card onClick={() => CreatedElement('Jeremy')}>
                        <CardImg className={style.resize} width='50%' src={startup}  alt='milly_start_up'/>
                        <CardImgOverlay className={style.imageOverlay}>
                            <CardTitle style={liStyle}>Welcome</CardTitle>
                        </CardImgOverlay>
                        
                        
                    </Card>
                </Col>
                <Col className='col-5'>
                    <div>Welcome to my Portfolio Page</div>
                </Col>
            </Row>
        </Container>
            
    )
    
}

export default HomePage;

