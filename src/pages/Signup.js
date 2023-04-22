import React , {useState }from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmel from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import '../styles/login.css';

const Signup = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [file,setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signup = async(e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = await userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on((error) => {
                toast.error(error.message)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=> {
                    //update user profile
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL,
                    });
                    //store user data in firestore database
                    await setDoc(doc(db, "users", user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })
                });
            });

            setLoading(false);
            toast.success('Account created');
            navigate('/login');
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    };

  return <Helmel title='Signup'>
    <section>
        <Container>
            <Row className='bar'>
                {
                    loading? (<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col>) :
                (<Col lg='6' className='m-auto text-center'>
                    <h3 className='fw-bold mb-3'>Đăng ký</h3>

                    <Form className='auth__form' onSubmit={signup}>

                        <FormGroup className='form__gruop'>
                            <input type="text" placeholder='Tên đăng nhập ...' 
                            value={username} onChange={e=>setUsername(e.target.value)}></input>
                        </FormGroup>

                        <FormGroup className='form__gruop'>
                            <input type="email" placeholder='Email ...' 
                            value={email} onChange={e=>setEmail(e.target.value)}></input>
                        </FormGroup>

                        <FormGroup className='form__gruop'>
                            <input type="password" placeholder='Mật khẩu ...'
                            value={password} onChange={e=>setPassword(e.target.value)}></input>
                        </FormGroup>

                        <FormGroup className='form__gruop'>
                            <input type="file"  onChange={e=>setFile(e.target.files[0])}></input>
                        </FormGroup>

                        <button type='submit' className='buy__bt auth__btn'>Tạo tài khoản</button>
                        <p>Bạn đã có tài khoản?<Link to='/login'>Đăng nhập</Link></p>
                    </Form>
                </Col>)
                }
            </Row>
        </Container>
    </section>
  </Helmel>
}

export default Signup