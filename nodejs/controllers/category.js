import Category from '../model/category';
import formidable from 'formidable';
import _ from 'lodash';
export const create = (req, res) => {

    const category = new Category(req.body);
    console.log(category)

    category.save((err, data) => { // luu lai
        // console.log(err)
        if (err) {
            return res.status(400).json({
                error: "Khong them duoc san pham"
            })
        }
        res.json({ data });
    });
    // })
   
}
//List Products
export const list = (req, res) => {
    Category.find((err, categories) => {
        if (err) {
            error: "khong tim thay danh muc"
        }
        res.json({ categories })
    })
}
//Product Detail
export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err || !category) {
        res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) =>{
    return res.json(req.category);
}
//Delete category
export const remove = (req, res) =>{
    let category = req.category;
    category.remove((err, deleteCategory) => {
        if(err||!category){
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            deleteCategory,
            message:"Sản phẩm đã được xóa thành công"
        })
    })
}
//Update Category
export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;

    category.save((err, data) => {
        if (err || !category) {
            res.status(400).json({
                error: "danh muc khong ton tai"
            });
        }
        res.json(data)
    })
}