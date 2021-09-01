
import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,

} from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import Header from './components/Header';
import LayoutAdmin from './layouts/admin';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import LayoutWebsite from './layouts/website';
import ProductDetailPage from './pages/product-detail';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import AdminProductEditPage from './pages/admin/product/edit';
import AdminCategoryPage from './pages/admin/category';
import AdminCategoryAddPage from './pages/admin/category/add';
import AdminCategoryEditPage from './pages/admin/category/edit';
import Footer from './components/Footer';
import ContactPage from './pages/contact';
import ProductPage from './pages/productpage';
import CategoryPage from './pages/categorypage';
import DashBoard from './pages/admin/dashboard';
import UserDashboard from './user/userDashboard';
import PrivateRoute from './auth/privateRouter';
import AdminRoute from './auth/adminRouter';
import CartPage from './pages/cartpage';
import AdminDashboard from './user/adminDashboard';
const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin">
                                    <Redirect to="/admin/dashboard" />
                                </Route>
                                <Route exact path="/admin/dashboard">
                                      <DashBoard />
                                </Route>
                                <Route exact path="/admin/product">
                                    <AdminProductPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AdminProductAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/users">
                                    Users Manager
                                </Route>
                                <Route exact path="/admin/product/edit/:id">
                                    <AdminProductEditPage {...props}/>
                                </Route>
                                <Route exact path="/admin/category">
                                    <AdminCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AdminCategoryAddPage {...props} />
                                </Route>

                                <Route exact path="/admin/category/edit/:id">
                                    <AdminCategoryEditPage {...props}/>
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite {...props}>
                            <Switch>
                                <Route exact path="/">
                                <HomePage {...props} />
                                </Route>
                                <Route exact path="/products">
                                <ProductPage {...props} />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                    
                                <Route exact path="/contact">
                                    <ContactPage />
                                </Route>
                                <Route exact path="/category/:id">
                                    <CategoryPage {...props}/>
                                </Route>
                                <Route exact path="/cartpage">
                                    <CartPage {...props}/>
                                </Route>
                                <Route path="/product/:id">
                                    <ProductDetailPage  />
                                </Route>
                                <Route exact path="/signup">
                                    <SignUp />
                                </Route>
                                <Route exact path="/signin">
                                    <SignIn/>
                                </Route>
                                <PrivateRoute exact path="/user/dashboard">
                                    <UserDashboard/>
                                </PrivateRoute>
                               <AdminRoute exact path="/admin/dashboard">
                                   <AdminDashboard/>
                               </AdminRoute>
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers
