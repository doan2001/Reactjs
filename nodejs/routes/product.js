import express from 'express';
import { list, create, productById, read, remove ,update,photo} from '../controllers/product'
import { requireSignin, isAdmin, isAuth } from '../controllers/auth';
import { userById } from '../controllers/user';
const router = express.Router();
router.get('/product', list);
router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/product/photo/:productId', photo);

router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin,update)
router.param("userId", userById);
router.get('/product/:productId', read);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove);
router.param('productId', productById);
module.exports = router;