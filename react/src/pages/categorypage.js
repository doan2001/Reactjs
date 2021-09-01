import React, { useEffect, useState } from 'react'
import { Link , NavLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ListCategory from '../components/Listcategory';
const CategoryPage = (props) => {
  console.log(props)
  const { id } = useParams();
  const result = props.products.filter((product) => product.category == id)

  return (
    <>
      <div className="popular-items section-padding30">
            <div className="container">
            {/* Section tittle */}
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="section-tittle mb-70 text-center">
                        <h2>SẢN PHẨM THEO DANH MỤC</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
            <div className="row">
            {result.map((product, index) => (
                    
                     <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-popular-items mb-50 text-center">
                                <div className="popular-img">
                                <img src={`http://localhost:4000/api/product/photo/${product._id}`}alt />

                                    <div className="img-cap">
                                        <span>Add to cart</span>
                                    </div>
                                    <div className="favorit-items">
                                        <span className="flaticon-heart" />
                                    </div>
                                </div>
                                <div className="popular-caption">
                                    <h3><NavLink to={`/product/${product._id}`}>{product.name}</NavLink></h3>
                                    <span>$ {product.price}</span>
                                </div>
                            </div>
                        </div>
            ))
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
    </>
  )
};
;

export default CategoryPage
{/* <div className="main-top">
        <a href="">
          <span>Trang chủ</span>
        </a>
        <a href="/#/products">
          <span> / Danh Mục </span>
        </a>
        <span> / Tất cả sản phẩm</span>
      </div>

      <div className="product-main">
        <div class="option-product">
          <nav id="menu-product">
            <ListCategory  {...props} />
          </nav>
        </div>
        <div class="list-product">
          {result.map((product, index) => (

            <div className="profile-card" key={index}>
              <Link to={`/product/${product._id}`}>
                <img width="190px" height="230px" src={`http://localhost:4000/api/product/photo/${product._id}`} className alt="" />
              </Link>
              <div className="card-body">
                <p className="card-name">{product.name}</p>

                <div className="price-product">
                  <p>${product.price}VNĐ</p></div>

                <Link to={`/product/${product._id}`} className="btn">Show</Link>
                <button data-id="${product._id}" className="btn" id="btnAddcart">Add to cart</button>
              </div>
            </div>

          )
          )
          }
        </div>
      </div> */}
