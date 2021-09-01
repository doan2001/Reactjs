import React from 'react'
import { useParams } from 'react-router-dom';
const CartPage = (props) => {
    const { id } = useParams();
    const cart = JSON.parse(localStorage.getItem("cart"))
    // let total = 0;
    // let quan = 0
    console.log(cart);
    // cart.map(item => {
    //     total += item.quantity * item.price;
    //     quan += item.quantity;

    // })
    return (
        <>
        </>
    // cart.map((product, index) => {
           
    //             <div>
    //                 <div className="main-top" style={{}}>
    //                     <a href>
    //                         <span>Trang chủ</span>
    //                     </a>
    //                     <span> / Danh sách giỏ hàng</span>
    //                 </div>
    //                 <table className="tables" style={{}}>
    //                     <thead>
    //                         <tr>
    //                             <th>Thứ tự</th>
    //                             <th>Tên</th>
    //                             <th>Ảnh</th>
    //                             <th>Giá</th>
    //                             <th>Số lượng</th>
    //                             <th>Chức năng</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <tr>
    //                             <td>${'{'}index += 1{'}'}</td>
    //                             <td>${'{'}product.name{'}'}</td>
    //                             <td><img src="${product.image}" width="50px" height="50px" alt /></td>
    //                             <td>${'{'}product.price{'}'}</td>
    //                             <td>${'{'}product.quantity{'}'}</td>
    //                             <td>
    //                                 <button className="btns remove_product12 " data-id="${product.id}">Remove</button>
    //                             </td>
    //                         </tr>
    //                     </tbody><tfoot>
    //                         <tr>
    //                             <th colSpan={3}>Tổng tiền</th>
    //                             <th className="total_price"> ${'{'}total{'}'}.000
    //     </th>
    //                             <th />
    //                             <th />
    //                         </tr>
    //                     </tfoot>
    //                 </table>
    //             </div>

            
    //     })
    

    )
}

export default CartPage


