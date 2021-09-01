import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AdminProductAddPage = ({ category, onAdd }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit =  (data) => {
        console.log(data);
        const formProduct = new FormData();
        formProduct.append('name', data.name);
        formProduct.append('description', data.description);
        formProduct.append('price', data.price);
        formProduct.append('photo', data.photo[0]);
        formProduct.append('category', data.category);

        onAdd(formProduct);
        history.push('/admin/product')
    }
    console.log(category)
    
    return (
        <div className="admin-dashboard">
            <h1>Product Add</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá sản phẩm"
                        {...register('price', { required: true })}
                    />
                    <label htmlFor="product-price">Giá sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                <div htmlFor="product-price">Danh mục sản phẩm</div>
                    <select className="form-floating mb-3"
                        {...register('category', { required: true })}
                    > 
                        {category.length &&
                            category.map((category, index) => (
                                <option key={index} value={category._id}>{category.name}</option>
                            ))
                        }
                    </select>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-desc">Mô tả sản phẩm</label>
                    <textarea type="number"
                        className="form-control"
                        id="product-desc"
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.desc && <span className="text-danger mt-2">This field is required</span>}
                </div>
                {/* <div className="mb-3">
                    <input type="checkbox" {...register('shipping')} /> Shipping
                </div> */}

                <div>
                    <label htmlFor="product-desc">Anh sản phẩm</label>
                    <input
                        type="file"
                        {...register("photo", { required: true })}
                    />
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>

        </div>
    )
}

export default AdminProductAddPage
