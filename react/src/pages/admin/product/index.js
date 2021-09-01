import React,{ useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination'
const AdminProductPage = (props) => {
    const [currentPage,setCurrentPage] = useState(1);
    const [productPerPage] = useState(6);
 //current product
 const indexOfLastProduct =currentPage * productPerPage;
 const indexOfFirstProduct =indexOfLastProduct -productPerPage;
 const currenProduct=props.products.slice(indexOfFirstProduct,indexOfLastProduct);
 const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        
        <div className="admin-dashboard">
            <div className="d-flex justify-content-between items-center">
                <h1>Product Manager</h1>
                <div>
                    <Link to="/admin/product/add" className="btn">Add</Link>
                </div>
            </div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Descriptions</th>
                        <th>picture</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {currenProduct.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <img src={`http://localhost:4000/api/product/photo/${product._id}`} height="50px" width="50px" />
                            </td>
                            <td>
                                <Link to={`/admin/product/edit/${product._id}`} className="btn">Update</Link>
                            </td>
                            <td>
                            <button className="btn "
                            onClick={() => props.onDelete(product._id)}
                        >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <Pagination productPerPage={productPerPage} total={props.products.length} paginate={paginate} />
            </table>
        </div>
    )
}

export default AdminProductPage