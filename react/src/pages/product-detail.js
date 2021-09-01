import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAPI from "../api/productAPI";
import "../css/product-detail.css";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await ProductAPI.get(id);
        console.log(data);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, []);
  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src={`http://localhost:4000/api/product/photo/${product._id}`}
          height={420}
          width={327}
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.name}</h1>
          <h2>by studio and friends</h2>
          <p>{product.description}</p>
        </div>
        <div className="product-price-btn">
          <p>
            <span style={{ display: 'inline-block', height: 50, fontFamily: '"Suranna", serif', fontSize: 30}}>
</span>

              {product.price} $
            

          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
