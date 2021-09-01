import React from 'react'
import { Link } from 'react-router-dom';

const AdminCategoryPage = (props) => {
  
    return (

        <div className="admin-dashboard">
            <div className="d-flex justify-content-between items-center">
                <h1>Category Manager</h1>
                <div>
                    <Link to="/admin/category/add" className="btn btn-primary">Add</Link>
                </div>
            </div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.category.map((category, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                              
                                <td>
                                    <Link to={`/admin/category/edit/${category._id}`} className="btn ">Update</Link>
                                </td>
                                <td>
                                    <button className="btn "
                                        onClick={() => props.onDeleteCategory(category._id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCategoryPage;
