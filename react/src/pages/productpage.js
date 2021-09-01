import React,{ useEffect, useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import ListCategory from '../components/Listcategory';
import Pagination from '../components/Pagination'
import ProductAPI from '../api/productAPI';
const ProductPage = (props) => {
    const [currentPage,setCurrentPage] = useState(1);
    const [productPerPage] = useState(6);
 //current product
 const indexOfLastProduct =currentPage * productPerPage;
 const indexOfFirstProduct =indexOfLastProduct -productPerPage;
 const currenProduct=props.products.slice(indexOfFirstProduct,indexOfLastProduct);
 const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <div className="popular-items section-padding30">
            <div className="container">
            {/* Section tittle */}
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="section-tittle mb-70 text-center">
                        <h2>SẢN PHẨM</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {currenProduct.map((todo, index) => {
                    
                    return<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                                <div className="popular-img">
                                <img src={`http://localhost:4000/api/product/photo/${todo._id}`}alt />

                                    <div className="img-cap">
                                        <span>Add to cart</span>
                                    </div>
                                    <div className="favorit-items">
                                        <span className="flaticon-heart" />
                                    </div>
                                </div>
                                <div className="popular-caption">
                                    <h3><NavLink to={`/product/${todo._id}`}>{todo.name}</NavLink></h3>
                                    <span>$ {todo.price}</span>
                                </div>
                            </div>
                        </div>
                })
            }
            </div>
                
                
            {/* Button */}
            <div className="row justify-content-center">
                <div className="room-btn pt-70">
                    <a href="catagori.html" className="btn view-btn1">View More Products</a>
                </div>
            </div>
        </div>
        </div>
        <Pagination productPerPage={productPerPage} total={props.products.length} paginate={paginate} />
    </>

  )
  
}

export default ProductPage
 