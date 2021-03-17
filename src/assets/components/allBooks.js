import React from "react";
import "../../styles/Component.css";
import Heart from "../svgs/heart.svg";
import People from "../svgs/people.svg";
import ReactStars from "react-rating-stars-component";
import Cart from "../svgs/cart.svg";


function allBooks(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <div className="d-flex all-books-section">
        <div className="all-section">
          <img src={props.img} alt="book" />
        </div>
        <div className="books-content">
          <h6>{props.title}</h6>
          <p className="sub">{props.subtitle}</p>
          <div className="d-flex mb-3">
            <div className="d-flex flex-column align-items-center">
              <img src={People} alt="heart" />
              <p className="mb-0">{props.people}</p>
            </div>
            <div className="d-flex flex-column align-items-center for-heart">
              <img src={Heart} alt="heart" />
              <p className="mb-0">{props.heartNumber}</p>
            </div>
            <div className="d-flex flex-column for-rating">
              <p className="mb-0">Rating 4.0</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={16}
                activeColor="#ffd700"
                isHalf={true}
              />
            </div>
          </div>
          <div className="d-flex content-extra">
            <p>{props.amount}</p>
            <p>{props.copies}</p>
          </div>
          <div className="">
          <img src={Cart} width="18" height="18" alt="Logo" />
            <a href="#/" className="add-books"> Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default allBooks;
