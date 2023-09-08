import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Loader from "../../utils/Loader";

const Users = () => {
  const [books, setBooks] = useState([]);

  const [searchField, setSearchField] = useState("");
  const [filteredBooks, setFilterBooks] = useState(books);

  const [isLoading, setIsLoading] = useState(false);

  const dummyBooks = [
    {
      username: "Edgar",
      role: "Admin",
      joinDate: "24 January 2023",
    },
    {
      username: "Sandy",
      role: "User",
      joinDate: "24 January 2023",
    },
    {
      username: "Orgi",
      role: "Admin",
      joinDate: "24 January 2023",
    },
    {
      username: "Mike",
      role: "User",
      joinDate: "24 January 2023",
    },
    {
      username: "Tony",
      role: "User",
      joinDate: "24 January 2023",
    },
    {
      username: "Jude",
      role: "User",
      joinDate: "24 January 2023",
    },
  ];

  useEffect(() => {
    setIsLoading(true);

    setBooks(dummyBooks);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const newFilteredBooks = books.filter((book) => {
      return book.username.toLocaleLowerCase().includes(searchField);
    });

    setFilterBooks(newFilteredBooks);
  }, [books, searchField]);

  const _onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 pb-5">
        <div className="d-flex align-items-center">
          <h2 className="me-auto p-2 flex-fill">All Users</h2>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            class="btn btn-success d-inline-flex align-items-center"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-plus me-2" /> Add user
            {/* <svg class="bi ms-1" width="20" height="20">
              <use xlink:href="#arrow-right-short"></use>
            </svg> */}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            class="btn btn-danger d-inline-flex align-items-center ms-3"
            type="button"
          >
            <i class="fa-solid fa-trash me-2" /> Delete user
            {/* <svg class="bi ms-1" width="20" height="20">
              <use xlink:href="#arrow-right-short"></use>
            </svg> */}
          </motion.div>
        </div>

        <hr class="my-2" />

        <div className="d-flex align-items-center">
          <div className="form-group p-2 flex-fill">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="search book name.."
                onChange={_onSearchChange}
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fa-brands fa-searchengin" />
              </span>
            </div>
          </div>

          <div className="form-group p-2 flex-fill ">
            <select className="form-select" id="floatingSelect">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <i className="fa-solid fa-sort pe-2"></i>

          <div className="form-group p-2 flex-fill ">
            <select className="form-select" id="floatingSelect">
              <option selected>Filter category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <i className="fa-solid fa-filter"></i>
        </div>

        <div className="py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-stretch g-4">
            {isLoading ? (
              <div className="text-center">
                <Loader />
              </div>
            ) : (
              filteredBooks.map((book) => {
                return (
                  <motion.div
                    className="col"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                      <div className="list-group-item list-group-item-action d-flex gap-3 p-3">
                        <img
                          src="https://github.com/twbs.png"
                          alt="twbs"
                          width="32"
                          height="32"
                          className="rounded-circle flex-shrink-0"
                        />
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="mb-0">{book.username}</h6>
                            <p className="opacity-75">{book.role}</p>
                            <small>Joined since {book.joinDate}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footer />

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded-4 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0">
              <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body p-5 pt-0">
              <form class="">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button
                  class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Sign up
                </button>
                <small class="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
