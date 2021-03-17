import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../svgs/arrow.svg";
import Button from '../components/button'

function Single(props) {
  return (
    <div className="container section-cont">
      <div className="preview-section">
        <div className="preview-cart">
          <Link className="back-button" to="">
            <img src={Arrow} alt="arrow" />
            Back
          </Link>
          <div className="mt-4">
            <div className="prev-image">
                <img src="https://blog.kristenburns.com/wp-content/uploads/A-Darker-Shade-of-Magic.jpg" alt="book" />
            </div>
            <div className="prev-image-price">
                <p>23 Copies Available</p>
                <h3>$29.99</h3>
            </div>
            <Button title="Add to Cart" />
          </div>
        </div>
        <div className="preview-content">
          <h1>Big Magic: Creative Living Beyond Fear</h1>
          <h5>Elizabeth Gilbert</h5>
          <p>2016</p>
          <div className="preview-rating">
            <div className="preview-rating-content">
              <div>
                <h6>Genre</h6>
                <p>Motivational</p>
              </div>
              <div>
                <h6>Tags</h6>
                <p>Creativity, Better Living</p>
              </div>
              <div>
                <h6>Publisher</h6>
                <p>Savannah Books</p>
              </div>
              <div>
                <h6>Released</h6>
                <p>21 January, 2016</p>
              </div>
            </div>
          </div>
          <div className="preview-details">
            <h5>The Instant #1 NEW YORK TIMES BEStseller</h5>
            <p>
              "A must read for anyone hoping to live a creative life... I dare
              you not to be inspired to be brave, to be free, and to be
              curious.” —PopSugar
            </p>
            <p>
              From the worldwide bestselling author of Eat Pray Love and City of
              Girls: the path to the vibrant, fulfilling life you’ve dreamed of.
            </p>
            <p>
              Readers of all ages and walks of life have drawn inspiration and
              empowerment from Elizabeth Gilbert’s books for years. Now this
              beloved author digs deep into her own generative process to share
              her wisdom and unique perspective about creativity. With profound
              empathy and radiant generosity, she offers potent insights into
              the mysterious nature of inspiration. She asks us to embrace our
              curiosity and let go of needless suffering. She shows us how to
              tackle what we most love, and how to face down what we most fear.
              She discusses the attitudes, approaches, and habits we need in
              order to live our most creative lives. Balancing between soulful
              spirituality and cheerful pragmatism, Gilbert encourages us to
              uncover the “strange jewels” that are hidden within each of us.
              Whether we are looking to write a book, make art, find new ways to
              address challenges in our work, embark on a dream long deferred,
              or simply infuse our everyday lives with more mindfulness and
              passion, Big Magic cracks open a world of wonder and joy.
            </p>
            <p>
              "A must read for anyone hoping to live a creative life... I dare
              you not to be inspired to be brave, to be free, and to be
              curious.” —PopSugar
            </p>
            <p>
              From the worldwide bestselling author of Eat Pray Love and City of
              Girls: the path to the vibrant, fulfilling life you’ve dreamed of.
            </p>
            <p>
              Readers of all ages and walks of life have drawn inspiration and
              empowerment from Elizabeth Gilbert’s books for years. Now this
              beloved author digs deep into her own generative process to share
              her wisdom and unique perspective about creativity. With profound
              empathy and radiant generosity, she offers potent insights into
              the mysterious nature of inspiration. She asks us to embrace our
              curiosity and let go of needless suffering. She shows us how to
              tackle what we most love, and how to face down what we most fear.
              She discusses the attitudes, approaches, and habits we need in
              order to live our most creative lives. Balancing between soulful
              spirituality and cheerful pragmatism, Gilbert encourages us to
              uncover the “strange jewels” that are hidden within each of us.
              Whether we are looking to write a book, make art, find new ways to
              address challenges in our work, embark on a dream long deferred,
              or simply infuse our everyday lives with more mindfulness and
              passion, Big Magic cracks open a world of wonder and joy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
