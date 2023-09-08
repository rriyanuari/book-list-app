import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Books = () => {
  const [searchField, setSearchField] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilterBooks] = useState(books);

  const dummyBooks = [
    {
      title: "Short title, long jacket",
      category: "Earth",
      postTime: "3d",
    },
    {
      title: "Much longer title that wraps to multiple lines",
      category: "Pakistan",
      postTime: "4d",
    },
    {
      title: "Another longer title belongs here",
      category: "California",
      postTime: "5d",
    },
    {
      title: "Short title, long jacket",
      category: "Earth",
      postTime: "3d",
    },
    {
      title: "Much longer title that wraps to multiple lines",
      category: "Pakistan",
      postTime: "4d",
    },
    {
      title: "Another longer title belongs here",
      category: "California",
      postTime: "5d",
    },
    {
      title: "Much longer title that wraps to multiple lines",
      category: "Pakistan",
      postTime: "4d",
    },
    {
      title: "Another longer title belongs here",
      category: "California",
      postTime: "5d",
    },
  ];

  useEffect(() => {
    setBooks(dummyBooks);
  }, []);

  useEffect(() => {
    const newFilteredBooks = books.filter((book) => {
      return book.title.toLocaleLowerCase().includes(searchField);
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

      {/* Rendering Books */}
      <div className="container my-5 pb-5">
        <div className="d-flex align-items-center pb-2 border-bottom">
          <h2 class="me-auto p-2 flex-fill">All Books</h2>

          <div class="form-group p-2">
            <div className="input-group">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="search book name.."
                onChange={_onSearchChange}
              />
              <span class="input-group-text" id="basic-addon2">
                <i class="fa-brands fa-searchengin" />
              </span>
            </div>
          </div>

          <div class="form-group p-2 ">
            <select class="form-select" id="floatingSelect">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <i class="fa-solid fa-sort pe-2"></i>

          <div class="form-group p-2 ">
            <select class="form-select" id="floatingSelect">
              <option selected>Filter category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <i class="fa-solid fa-filter"></i>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-stretch g-4 py-5">
          {filteredBooks.map((book) => {
            return (
              <motion.div
                className="col"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg mx-1">
                  <div className="d-flex flex-column h-100 py-5 px-4 pb-3 text-white text-shadow-1">
                    <h5 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
                      {book.title}
                    </h5>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img
                          src="https://github.com/twbs.png"
                          alt="Bootstrap"
                          width="32"
                          height="32"
                          className="rounded-circle border border-white"
                        />
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <i class="fa-solid fa-earth-europe m-1" />
                        <small>{book.category}</small>
                      </li>
                      <li className="d-flex align-items-center">
                        <i class="fa-solid fa-calendar-days m-1" />
                        <small>{book.postTime}</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* --------------- */}

      <Footer />
    </>
  );
};

export default Books;
