import React, {useState} from 'react';
import "../styles/common-section.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductsList';
// import ProductDetails from './ProductDetails';

const Shop = () => {

    const [productsData, setProductsData] = useState(products)
    const handleFilter = e => {
        const filterValue = e.target.value
            if(filterValue==='sofa'){
                const filteredProducts = products.filter(item=>item.category==='sofa');

                setProductsData(filteredProducts);
            };
            if(filterValue==='mobile'){
                const filterProducts = products.filter(item=>item.category==='mobile');

                setProductsData(filterProducts);
            };
            if(filterValue==='chair'){
                const filterProducts = products.filter(item=>item.category==='chair');

                setProductsData(filterProducts);
            };if(filterValue==='watch'){
                const filterProducts = products.filter(item=>item.category==='watch');

                setProductsData(filterProducts);
            };
            if(filterValue==='wireless'){
                const filterProducts = products.filter(item=>item.category==='wireless');

                setProductsData(filterProducts);
            };
            

    };

    const handleSearch = e =>{
        const searchTerm = e.target.value
        const searchedProducts = products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

            setProductsData(searchedProducts)
    }


  return (
  <Helmet title="Shop">
    <CommonSection title="SẢN PHẨM"/>

    <section>
        <Container>
            <Row>
                <Col lg='3' md='6'>
                    <div className="filter__widget">
                        <select onChange={handleFilter}>
                            <option>Lọc theo loại </option>
                            <option value="mobile">iPhone</option>
                            <option value="sofa">iPad</option>
                            <option value="chair">MacBook</option>
                            <option value="watch">Đồng hồ</option>
                            <option value="wireless">Tai nghe</option>
                        </select>
                    </div>
                </Col>
                <Col lg='3' md='6' className='text-start'>
                    <div className="filter__widget">
                        <select>
                            <option>Sắp xếp</option>
                            <option value="ascending">Tăng dần</option>
                            <option value="descending">Giảm dần</option>
                        </select>
                    </div>
                </Col>
                <Col lg='6' md='12'>
                    <div className="search__box">
                        <input type='text' placeholder="Tìm kiếm..." onChange={handleSearch }/>
                        <span>
                            <i className="ri-search-line"/>
                        </span>
                    </div>
                </Col> 
            </Row>
        </Container>
    </section>

    <section className='pt-0'>
        <Container>
            <Row>
                {
                    productsData.length === 0? (<h1 className='text-center fs-4'>Không tìm thấy sản phẩm</h1>)
                    : (<ProductList data = {productsData}/>
                )}
            </Row>
        </Container>
    </section>

  </Helmet>
  );
};

export default Shop