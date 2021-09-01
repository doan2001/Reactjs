import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAPI from "./api/productAPI";
import categoryAPI from "./api/categoryAPI";
import Routers from "./Routers";
import CategoryAPI from "./api/categoryAPI";
import { isAuthenticated } from "./auth";
import Pagination from './components/Pagination'
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
 

  useEffect(() => {
    // call api
    const getTodoProduct = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products);//setProducts bằng dữ liệu vừa lấy đc
      } catch (error) {
        console.log(error);
      }
    };
    getTodoProduct();

    const getTodoCategory = async () => {
      try {
        const { data: categories } = await categoryAPI.getAll();
        setCategories(categories.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoCategory();
  }, []);
  const onHandleAddProduct = async (product) => {
    const { user, token } = isAuthenticated();//check quyền 
    try {
      //thêm trên api
      const { data: pro } = await ProductAPI.add(product, user._id, token);
      //rerender
      setProducts([...products, pro]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAddCategory = async (category) => {
    const { user, token } = isAuthenticated();
    try {
      await CategoryAPI.add(category, user._id, token);
      setCategories([...categories, category]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEditProduct = async (id, product) => {
    const { user, token } = isAuthenticated();
    try {
      const { data: pro } = await ProductAPI.update(
        id,
        product,
        user._id,
        token
      );
      const newProduct = await ProductAPI.getAll();
      setProducts(newProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEditCategory = async (id, category) => {
    const { user, token } = isAuthenticated();
    try {
      await CategoryAPI.update(id, category, user._id, token);
      const { data: newCategory } = await CategoryAPI.getAll();
      setCategories(newCategory.categories);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDeleteProduct = async (id) => {
    const { user, token } = isAuthenticated();
    try {
      await ProductAPI.remove(id, user._id, token);//xóa trên api
      //xóa để rerender lại
      const newProducts = products.filter((product) => product._id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDeleteCategory = async (id) => {
    const { user, token } = isAuthenticated();
    try {
      await categoryAPI.remove(id, user._id, token);
      const newCategories = categories.filter(
        (category) => category._id !== id
      );
      setCategories(newCategories);
    } catch (error) {
      console.log(error);
    }

    // console.log(todos);
  };
  return (
    <div className="">
      
      <Routers
        products={products}
        category={categories}
        onDelete={onHandleDeleteProduct}
        onAdd={onHandleAddProduct}
        onEdit={onHandleEditProduct}
        onDeleteCategory={onHandleDeleteCategory}
        onAddCategory={onHandleAddCategory}
        onEditCategory={onHandleEditCategory}
      />
      
    </div>
  );
}

export default App;
