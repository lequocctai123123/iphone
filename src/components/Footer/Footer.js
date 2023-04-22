import React from 'react';
import './Footer.css';
//import logo from '../../assets/images/eco-logo.png';
import {Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className='footer-item mb-4'md='6'>
            <div className="logo">
              <div>
                <h1 className='text-white'>WinX Store</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
            Apple Inc. là một tập đoàn công nghệ của Mỹ được thành lập vào ngày 1 tháng 4 năm 1976 bởi Steve Jobs, Steve Wozniak, và Ronald Wayne dưới tên Apple Computer, Inc. Apple có trụ sở chính đặt tại Silicon Valley ở San Francisco, tiểu bang California
            </p>
          </Col>

          <Col lg="2" md='3' className='footer-item mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Chính sách</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Bảo hành</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Thanh toán</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Giao hàng</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Bảo mật</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" className='footer-item'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Hệ thống cửa hàng</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span> <i class="ri-map-pin-line"></i></span>
                  <p>384 An Dương Vương , Quận 5 , TP.HCM</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>(+84) 987654321</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>winxstore384@gmail.com</p> 
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'md='6'>
            <p className='footer__copyright'>Copyright WinX Team</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer