import React from 'react'

import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';

const AdminDashboard = () => {
    const { user } = isAuthenticated();
    console.log(user)
    // window.scrollTo(0, 0);
    return (


        <div title="Dashboard" description="Admin dashboard" className="fixed ...">
            <div className="main-top">
                <a href="">
                    <span>Trang chủ</span>
                </a>
                <a href="/#/products">
                    <span> / Danh Mục </span>
                </a>
                <span> / Thông tin người dùng</span>
            </div>
            <div className="row">
                <div className="">
                    <div className="card">
                        <div className="card-header">
                            Create
                           </div>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/create/product">San pham</Link></li>
                            <li className="list-group-item"><Link to="/create/category">Danh muc</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="card">
                        <div className="card-header">
                            Thong tin user
                           </div>
                        <ul className="list-group">
                       
                            <li className="list-group-item">Name:{user.name}</li>
                            
                            <li className="list-group-item">Email:{user.email}</li>
                            
                            <li className="list-group-item">{user.role==1 ? 'Admin' :'register user'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminDashboard
