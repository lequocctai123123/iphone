import React, {useEffect, useRef} from 'react';
import './Header.css';
import {Container, Row} from "reactstrap";
import logo from '../../assets/images/eco-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../../assets/images/user-icon.png';
import {motion} from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import { Auth } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav__link = [
  {
    path:'home',
    display: 'Trang Chủ'
  },
  {
    path:'shop',
    display: 'Sản Phẩm'
  },
  {
    path:'cart',
    display: 'Giỏ Hàng'
  },
  
];

const Header = () => {

  const headerRef = useRef(null);
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);
  const profileActionRef = useRef(null)
  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const {currentUser} = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 88 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else{
        headerRef.current.classList.remove('sticky__header')
      }
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out');
      navigate("/home")
    }).catch(err => {
      toast.error(err.message);
    })
  }

    useEffect(()=>{
      stickyHeaderFunc()

      return () => window.removeEventListener("scroll", stickyHeaderFunc);
    });


    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    const navigateToCart = () => {
      navigate("/cart")
    }

    return <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className="logo">
              <img src={logo} alt="logo"/>
              <div>
                <h1>WinX Store</h1>
                
              </div>
            </div>

            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {
                  nav__link.map((item, index)=>(
                  <li className="nav_item" key={index}>
                  <NavLink to ={item.path} className={(navClass)=> navClass.isActive ? "nav__active": " "}>{item.display}</NavLink>
                  </li>))
                }
              </ul>
            </div>

            <div className="nav__icons">
              {/* <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge"></span>
              </span> */}
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              {/* <div className='profile'><motion.img whileTap={{scale:1.1}} 
                src={currentUser? currentUser.photoURL : userIcon} alt="" onClick={toggleProfileActions}/></div> */}

              <div className='profile__actions' ref={profileActionRef} onClick={toggleProfileActions}>
                {
                  currentUser ? (<span className='logout' onClick={logout}>Đăng xuất</span>) : (
                  <div className='d-flex align-items-center justify-content-center'>
                    <Link  to='/signup'><p className='signup'>Đăng ký</p></Link> 
                    <Link  to='/login'><p className='login'>Đăng nhập</p></Link> 
                  </div>)
                }
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle} ><i className="ri-menu-line" /></span>
              </div>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
}

export default Header
//1:50:04 lỗi thu nhỏ