import { Link, NavLink, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();

  const _handlerLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logout from this app!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout Success!",
          text: "You will be redirecting....",
          icon: "success",
          timerProgressBar: true,
          timer: 3000,
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-book-open-reader mx-2" /> Book List App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : ""} nav-link`
                }
              >
                <i className="fa-solid fa-gauge mx-2" /> Dashboard
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : ""} nav-link`
                }
              >
                <i className="fa-solid fa-users mx-2" /> Users
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/books"
                className={({ isActive, isPending }) =>
                  `${isActive ? "active" : ""} nav-link`
                }
              >
                <i className="fa-solid fa-book mx-2" /> Books
              </NavLink>
            </li>
            <li className="nav-item mx-2 ms-md-5">
              <button
                type="button"
                onClick={_handlerLogout}
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-title="Tooltip on left"
              >
                <i className="fa-solid fa-door-open mx-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
