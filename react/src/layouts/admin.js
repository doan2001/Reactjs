import React from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'

const LayoutAdmin = (props) => {
    const authen = JSON.parse(localStorage.getItem('user'))
    console.log(authen)
    if (!authen) {
        return <Redirect to="/signin" />
    }
    else {
        if (authen.user.role == 0) {
            return <Redirect to="/" />
        }
        else if (authen.user.role == 1) {
            return (
                <div id="content-wrapper">
                    <div className="container">
                        <div className="left-menu">
                            <div className="menu-heading">Admin Menu</div>
                            <div className="menu-items">
                                <ul>
                                    <li><NavLink to="/">Trang chủ</NavLink></li>
                                    <li><NavLink to="/admin/product">Quản lí sản phẩm</NavLink></li>
                                    <li><NavLink to="/admin/category">Quản lí danh mục</NavLink></li>
                                    <li><NavLink to="/admin/user">User</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-content" style={{width: 700}}>
                        {props.children}
                        </div>
                    </div>
                </div>

            )
        }
    }
}
export default LayoutAdmin
