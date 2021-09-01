import React from 'react'
import { Link } from 'react-router-dom'
const Products = (props) => {
    return (
        <div>
            <ul className="list-group">
                {props.products.map((todo, index) => {
                    return <li className="list-group-item d-flex justify-content-between" key={index}>
                        <Link to={`/product/${todo._id}`}>{todo.name}</Link>
                        <button className="btn btn-danger btn-sm"
                            onClick={() => props.onDelete(todo._id)}
                        >Delete</button>
                    </li>
                })}
            </ul>
        </div >
    )
}
export default Products
