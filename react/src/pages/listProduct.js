import React from 'react'

const listProduct = () => {
    useEffect(() => {
        // call api
        const getTodoProduct = async () => {
          try {
            const { data: products } = await ProductAPI.getAll();
            setProducts(products);
          } catch (error) {
            console.log(error);
          }
        };
        getTodoProduct();
      }, []);
    return (
        <div>
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
                {props.products.map((todo, index) => {
                    
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
    </>
        </div>
    )
}

export default listProduct
