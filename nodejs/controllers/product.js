import Product from '../model/product';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
//thêm sản phẩm
export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;// lấy duôi của hình ảnh 
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "thêm sản phẩm không thành công"
            })
        }
        const { name, description, price } = fields;//bóc tách dữ liệu
        if (!name || !description || !price) {//check
            return res.status(400).json({
                error: "bạn cần nhập đầy đủ thông tin"
            })
        }
        let product = new Product(fields);//khởi tạo biến nhận giá trị
        if (files.photo) {
            if (files.photo.size > 1000000) {
                console.log(files.photo.size)
                return res.status(400).json({
                    error: "bạn cần up ảnh nhỏ hơn 1mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);//gán gt
            product.photo.contentType = files.photo.type;
        }
        product.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "không thêm được sản phẩm"
                })
            }
            res.json(data)
        })
    })
}//sử lí ảnh
export const photo = (req, res, next) => {
	if(req.product.photo.data){
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data)
    }
    next();
}
//list sản phẩm
export const list = (req, res) => {
 
    Product.find()
    .select("-photo")
    .exec((err,data) => {
        if(err){
            res.status.json({
                error: "Product not found"
            })
        }
        res.json(data)
    })
}
//chi tiết sản phẩm
export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                error: "không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.product);
}
//xóa sản phẩm
export const remove = (req, res)=>{
    let product = req.product;//lấy thông tin sp
    product.remove((err,deleteProduct) => {
        if(err){
            return res.status(400).json({
                error: "không xóa đc sản phẩm"
            })
        }
        deleteProduct.photo = undefined;
        res.json({
            product : deleteProduct,
            message:"sản phẩm được chọn đã xóa"
        })
    })
}
//update
export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true; // lay du lieu anh 
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "sua san pham k thanh cong"
            });
        }
        const { name, price, description } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Ban can nhap day du thong tin"
            })
        }
        // let product = new Product(fields);
        let product = req.product;
        product = _.assignIn(product, fields);
        if (files.photo) {
            if (files.photo.size > 1000000) {
                res.status(400).json({
                    error: "Ban nen up anh duoi 1mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.path;
        }
        product.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "sua san pham k thanh cong"
                });
            }
            res.json(data)
        })
    })
}