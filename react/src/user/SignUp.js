import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import validate from "../validate/validateform";
import { signUp } from "../auth";
import "../css/SignUp.css";
import swal from "sweetalert";
const SignUp = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {//e khi đăng kí thành công sẽ reset gt trong input
    signUp(data).then((dataInput) => {
      //check
      if (dataInput.error) {
        setError(dataInput.error);
      } else {
        setError("");
        swal({
          title: "Thành công!",
          text: "Đăng kí thành công",
          icon: "success",
          button: "Tiếp tục",
        });
        setSuccess(true);
        history.push("/signin");
      }
    });
  };
  const showError = () => {
    return (
      <div
        className="error-login"
        style={{ display: error ? "block" : "none",color:"red" }}>
        {error}
      </div>
    );
  };
  const showSuccess = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: success ? "true" : "none" }}
      >
        bạn đã tạo tài khoản thành công.click để{" "}
        <Link to="/signin">đăng nhập</Link> lại
      </div>
    );
  };
  const signUpForm = () => {
    return (
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign Up
          </h1>
          <div className="social-login">
            <button className="btn facebook-btn social-btn" type="button">
              <span>
                <i className="fab fa-facebook-f" /> Sign UP with Facebook
              </span>{" "}
            </button>
            <button className="btn google-btn social-btn" type="button">
              <span>
                <i className="fab fa-google-plus-g" /> Sign Up with Google+
              </span>{" "}
            </button>
          </div>
          <p style={{ textAlign: "center" }}> OR</p>
          <div>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Full name"
              required
              autofocus
              //lấy giá trị cua input
              {...register("name",{
                required: true,
                maxLength: 50,
                pattern: /^[A-Za-z]+$/i
              })}
            />
            {errors?.name?.type === "required" && <p type={{color:'red'}}>Không được để trống</p>}
            {errors?.name?.type === "maxLength" && (
                <p type={{color:'red'}}>Không được quá 50 kí tự</p>
            )}
             {errors?.name?.type === "pattern" && (
                <p style={{color:'red'}}>Vui lòng nhập đúng họ tên</p>
            )}
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
              {...register("email",{
                required: true,
                pattern: /\S+@\S+\.\S+/
              })}
            />
             {showError()}
           {errors?.email?.type === "required" && <p stype={{color:'red'}}>Không được để trống</p>}
            {errors?.email?.type === "pattern" && (
                <p style={{color:'red'}}>Vui lòng nhập đúng email</p>
            )}
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
              autofocus
              {...register("password",
              { required:true,
                minLength:6,
                maxLength:20
                })} />
                {errors?.password?.type === "required" && (
                  <p style={{color:'red'}}>Không được để trống</p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p style={{color:'red'}}> Password must be at least 6 characters</p>
                )}
                {errors?.password?.type === "maxLength" && (
                  <p style={{color:'red'}}s>Password length must be at most 20 characters</p>
                )}
          </div>

          <button className="btn btn-success btn-block" type="submit">
            <i className="fas fa-sign-in-alt" /> Sign Up
          </button>

          <hr />
          {/* <p>Don't have an account!</p>  */}
          <NavLink to="/signin" id="cancel_signup">
            <i className="fas fa-angle-left" /> Back
          </NavLink>
        </form>

        <br />
      </div>
    );
  };
  return (
    <div>
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </div>
  );
};

export default SignUp;
