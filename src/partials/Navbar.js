import React from "react";
import MainLogo from "../assets/svgs/brand-full.svg";
import Cart from "../assets/svgs/cart.svg";
import Books from "../assets/svgs/books.svg";
import Search from "../assets/svgs/search.svg";
import '../styles/Main.css'

function Navbar() {
  return (
    <div>
    {/* Navbar begins here */}
      <nav className="navbar header-section">
        <div className="container">
          <a href="#/" className="navbar-brand">
            <img src={MainLogo} width="211" height="50" alt="Logo" />
          </a>
          <form>
            <input
              className="form-control"
              type="search"
              placeholder="Search books, genres, authors, etc"
            />
            <a href="#/">
              <img src={Search}  alt="search" />
            </a>
          </form>
          <div className="books-cart">
            <a href="#/">
              <img src={Books} width="24" height="24"   alt="books" />
            </a>
            <a href="#/">
              <img src={Cart}  width="24" height="24"  alt="cart" />
            </a>
          </div>
        </div>
      </nav>
    {/* Navbar ends here */}
    </div>
  );
}

export default Navbar;
