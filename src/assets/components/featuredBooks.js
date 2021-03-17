import React from "react";
import "../../styles/Component.css";

function featuredBooks(props) {
  return (
    <div>
      <div className="books-section">
        <img src={props.img} alt="book" />
      </div>
    </div>
  );
}

export default featuredBooks;
