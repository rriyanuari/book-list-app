import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const Login = () => {
  const [user, setUser] = useState({ username: null, password: null });
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const _showPass = () => {
    setShowPass(!showPass);
  };

  const _handlerLogin = () => {
    Swal.fire({
      title: "Login Success!",
      text: "You will be redirecting....",
      icon: "success",
      timerProgressBar: true,
      timer: 3000,
    }).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Book image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form className="d-grid">
                <div className="d-flex align-items-center mb-5">
                  <h1 className="me-4">
                    <i className="fa-solid fa-book-open" />
                  </h1>
                  <p className="lead fw-normal">Book List App - Login</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-user mx-2" />
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="username"
                    />
                    <label>Username</label>
                  </div>
                </div>

                {/* <!-- Password input --> */}
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-lock mx-2" />
                  </span>
                  <div className="form-floating">
                    <input
                      type={showPass ? "text" : "password"}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="password"
                    />
                    <label>Password</label>
                  </div>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={_showPass}
                  >
                    <i
                      className={`fa-solid ${
                        showPass ? "fa-eye" : "fa-eye-slash"
                      }`}
                    />
                  </button>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={_handlerLogin}
                >
                  Login <i className="fa-solid fa-right-to-bracket"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
