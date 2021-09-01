import React from "react";

const Pagination = ({ productPerPage, total,paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / productPerPage); i++) {
    pageNumbers.push(i);
  }
 
  
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map(number =>{
          return (
            <li className="page-item">
            <a className="page-link" href="#" onClick={() => paginate(number)}>
           {number}
          </a>
        </li>
          )
        })}
        
      </ul>
    </nav>
    
  );
};

export default Pagination;
