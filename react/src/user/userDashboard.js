import React from 'react'

import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';

const UserDashboard = () => {
    const { user } = isAuthenticated();
    console.log(user)
    // window.scrollTo(0, 0);
    return (


        <div title="Dashboard" description="User dashboard" className="fixed ...">
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
                            Thanh toan
                           </div>
                        <ul className="list-group">
                            <li className="list-group-item"><Link>Giỏ hàng</Link></li>
                            <li className="list-group-item"><Link>Thông tin</Link></li>
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

export default UserDashboard
