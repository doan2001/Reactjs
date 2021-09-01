import React from 'react'
import {
    NavLink,
    Link
} from 'react-router-dom';
const ListCategory = (props) => {
    return (
        <li>
       
           { 
            props.category.map((category,index)=>(
                
                <li key={index}  ><NavLink to={`/category/${category._id}`}>{category.name}</NavLink></li>
            ))}
        </li>
    )
}

export default ListCategory
