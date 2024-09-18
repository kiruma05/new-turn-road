import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import acc4 from '../../asset/acc4.jpeg';
import imagepro3 from '../../asset/imagepro3.webp';
import acc6 from '../../asset/acc6.jpeg';
import acc7 from '../../asset/acc7.jpeg';

function DashImage() {
    


  return (
    <Container fluid className="p-0 overflow-hidden">
      <Row className="g-0" style={{ margin: '20px 0' }}>
      <Col md={6} className="position-relative">
      <Row className="image-container" style={{ 
        backgroundImage: `url(${acc4})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '390px',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '25px',
        alignItems: 'center',
        padding: 0 
      }}>
        <Col md={3} className="position-relative">
          <img src={acc4} alt="Ima 1" style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col md={2} className="position-relative">
          <img src={acc7} alt="Imag 2" style={{ width: '100%', height: 'auto' }} />
        </Col>
      </Row>
    </Col>

        <Col md={6} className="position-relative">
          <div className="image-container" style={{ 
            backgroundImage: `url(${imagepro3})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0 
          }}>
            
          </div>
        </Col>
      </Row>

      <Row className="g-0" style={{ margin: '20px 0' }}>
        <Col md={6} className="position-relative">
          <div className="image-container" style={{ 
            backgroundImage: `url(${acc6})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            marginRight: '25px',
            alignItems: 'center',
            padding: 0,
            marginBottom: "10px"  
          }}>
           
          </div>
        </Col>

        <Col md={6} className="position-relative">
          <div className="image-container" style={{ 
            backgroundImage: `url(${acc7})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0
           
          }}>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashImage
