import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FeaturedBooks from "../components/featuredBooks";
import AllBooks from "../components/allBooks";
import '../../styles/Responsiveness.css'

function Main(props) {
  return (
    <div className="container section-cont">
      <div className="title-name">
        <h5>Featured Books</h5>
      </div>
      <div className="mt-4 d-flex">
        <Carousel>
          {[...Array(6)].map((i) => (
            <FeaturedBooks
              key={i}
              img="https://blog.kristenburns.com/wp-content/uploads/A-Darker-Shade-of-Magic.jpg"
            />
          ))}
        </Carousel>
      </div>
      <div className="mt-5 pt-2">
        <div className="title-name">
          <h5>All Books</h5>
        </div>
        <div className="mt-4 grid-display">
          {[...Array(15)].map((i) => (
            <AllBooks
              key={i}
              img="https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg"
              title="Educated"
              subtitle="Edmound Lau - 2009 Motivational"
              people="13"
              heartNumber="27"
              amount="$29.99"
              copies="23 Copies Available"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
