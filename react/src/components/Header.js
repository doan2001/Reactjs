import React, { useState ,useEffect} from 'react'
import {
    NavLink , useHistory } from 'react-router-dom';
import { signOut , isAuthenticated} from '../auth';

import {useLocation} from 'react-router-dom'
const Header = (props) => {
  const history = useHistory();
    const sidz =window.location.origin;
    const{ pathname} = useLocation();
    const [isLogged, setIsLogged] = useState(false)
    useEffect(()=>{
      isAuthenticated() && setIsLogged(true)
    },[pathname , isLogged])
    return (
      <div className="header">
        <div className="logo">
        <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width={100} height={50} viewBox="0 0 192.756 192.756">
          <img src="../../img/banner/logo.png" alt />


          </svg>
        </NavLink>
      </div>
        <nav className>
        <ul id="menu">
          <li><NavLink to="/" className="link-menu">Trang chủ</NavLink></li>
          <li><NavLink to="/products" className="link-menu">Sản phẩm</NavLink>
            <ul>
              { 
                props.category.map((category,index)=>(
                    
                    <li key={index}  ><NavLink to={`/category/${category._id}`}>{category.name}</NavLink></li>
                ))}
            </ul></li>
          
          <li><NavLink to="/about" className="link-menu">Giới thiệu</NavLink></li>
          
          <li><NavLink to="/contact" className="link-menu">Liên hệ</NavLink></li>
          <li><NavLink to="/admin/dashboard" className="link-menu">Quản trị</NavLink></li>

          {isLogged &&(
          <li><a 
          activeClassName="active"
          className="link-menu" 
          style={{cursor:'pointer'}}
          onClick={()=> signOut(()=>//callback để next
            {
              setIsLogged(false)
              window.alert('Đã thoát đăng nhập')
              history.push('/')
          })}>Signout</a></li>
          )}
          
        </ul>
      </nav>
        <div className="icons">
    <div className="search">
      <input type="text" name id="test123" placeholder="Tìm kiếm" />
      <button>search</button>
    </div>
    <NavLink to="/cartpage">
      <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
      </svg>
    </NavLink>
    {!isLogged &&(
       <NavLink className="btn " style={{width:100}} to="/signin">Login</NavLink>
  )}
  </div>
      </div>
    )
}

export default Header
