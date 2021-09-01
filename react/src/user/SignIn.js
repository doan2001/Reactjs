import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect, useHistory, NavLink } from 'react-router-dom'
import { signIn, authenticate, isAuthenticated } from '../auth'
import swal from 'sweetalert';
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] = useState(false)

    const { user } = isAuthenticated();
    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    // swal({
                    //     title: "Thành công!",
                    //     text: "Đăng nhập thành công",
                    //     icon: "success",
                    //     button: "Tiếp tục",
                    // })
                    authenticate(dataUser, () => {
                        setRedirectToRef(true)

                    })

                }
            })
    }
    const showError = () => {
        return <div className="error-login" style={{ display: error ? "block" : "none",color: "red"}}>

            {error}
        </div>

    }
    const redirectUser = () => {
        if (redirectToRef) {
            if (user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            }
            else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }
    const showLoading = () => {

        return loading && <div className="alert alert-info">
            <h2>...LOADING...</h2>
        </div>

    }
    const signInForm = () => {
        return (
            <div id="logreg-forms">
                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign in</h1>
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Sign in with Facebook</span> </button>
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g" /> Sign in with Google+</span> </button>
                    </div>
                    <p style={{ textAlign: 'center' }}> OR</p>
                    <input type="text" 
                        id="email" 
                        className="form-control" 
                        placeholder="Email address" 
                         {...register('email',
                         {required:true,pattern: /\S+@\S+\.\S+/})} />
                        {errors?.email?.type ==="required" && (<span className="text-danger mt-2">Không được để trống</span>)}
                        {showError()}
                        
                    <input type="password" 
                        id="password" 
                        className="form-control" 
                        placeholder="Password" 
                        required {...register('password',{required:"Password is required"})} />
                        {errors.password && <span className="text-danger mt-2">{errors.password.message}</span>}
                    <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt" /> Sign in</button>
                    <a href="#" id="forgot_pswd">Forgot password?</a>
                    <hr />
                    {/* <p>Don't have an account!</p>  */}
                    <NavLink to="/signup" className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus" /> Sign up New Account</NavLink>
                </form>
                <br />
            </div>

        )
    }
    return (
        <div>
            {redirectUser()}
            {showLoading()}
            
            {signInForm()}

        </div>
    )
}

export default SignIn
