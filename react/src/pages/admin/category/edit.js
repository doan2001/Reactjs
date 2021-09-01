import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import CategoryAPI from '../../../api/categoryAPI';

const AdminCategoryEditPage = ({ onEditCategory }) => {
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [category, setCategory] = useState({})

    const onHandleSubmit = async(data) => {  
        onEditCategory(id, data);
        history.push('/admin/category')
    }
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                console.log(data);
                setCategory(data);
            } catch (error) {

            }
        }
        getCategory();
    }, [])
    return (
        <div className="admin-dashboard">
            <h1>Category Edit</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        defaultValue={category.name}
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên danh mục</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
               
                <button type="submit" className="btn ">Submit</button>
            </form>

        </div>
    )
}

export default AdminCategoryEditPage;
