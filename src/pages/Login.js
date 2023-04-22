import React , {useState }from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmel from '../components/Helmet/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const signIn = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user)
            setLoading(false)
            toast.success('Successfully logged in')
            navigate('/checkout')

        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

  return <Helmel title='Login'>
    <section>
        <Container>
            <Row className='bar'>
                {
                    loading ? (<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col>) : (<Col lg='6' className='m-auto text-center'>
                    <h3 className='fw-bold mb-3'>Đăng nhập</h3>

                    <Form className='auth__form' onSubmit={signIn}>

                        <FormGroup className='form__gruop'>
                            <input type="email" placeholder='Enter your email' 
                            value={email} onChange={e=>setEmail(e.target.value)}></input>
                        </FormGroup>

                        <FormGroup className='form__gruop'>
                            <input type="password" placeholder='Enter your password'
                            value={password} onChange={e=>setPassword(e.target.value)}></input>
                        </FormGroup>

                        <button type='submit' className='buy__bt auth__btn'>Đăng nhập</button>
                        <p>Bạn chưa có tài khoản<Link to='/signup'>Đăng ký</Link></p>
                    </Form>
                </Col>)
                }
            </Row>
        </Container>
    </section>
  </Helmel>
}

export default Login