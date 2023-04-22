import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmel from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const totalQty = useSelector(state=>state.cart.totalQuantity);
    const totalAmount =  useSelector(state=>state.cart.totalAmount);
  return (
    <Helmel title="Checkout">
      <CommonSection title='THANH TOÁN'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Vui lòng nhập thông tin thanh toán: </h6>
              <Form className='billing__form'>
                <FormGroup className='form__goup'>
                  <input type='text' placeholder="Họ và tên...."/>
                </FormGroup>

                <FormGroup className='form__goup'>
                  <input type='email' placeholder="Địa chỉ email...."/>
                </FormGroup>

                <FormGroup className='form__goup'>
                  <input type='number' placeholder="Số điện thoại...."/>
                </FormGroup>

                <FormGroup className='form__goup'>
                  <input type='text' placeholder="Địa chỉ...."/>
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
                <div className='checkout__cart'>
                    <h6><b>Tổng số lượng:</b> <span>{totalQty} sản phẩm</span></h6>
                    <h6><b>Tổng cộng: </b><span>${totalAmount}</span></h6>
                    <h6>
                        <span>
                            <b>Giao hàng:</b><br/> <span className='free'>Miễn phí giao hàng</span>
                        </span>  
                        <span>$0</span>
                    </h6>
                    <h4><b>Tổng:</b> <span>${totalAmount}</span></h4>
                    <button className='buy__btn auth__btn w-100'>
                    Đặt hàng
                    </button>
                </div>
               
            </Col>


          </Row>
        </Container>
      </section>
    </Helmel>
  )
}

export default Checkout