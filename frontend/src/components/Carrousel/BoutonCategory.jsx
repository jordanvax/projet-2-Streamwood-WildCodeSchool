import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hundelcarousel from "./Scriptcarouselenligne";
import "./BoutonCategory.css";

function BoutonCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setTimeout(() => Hundelcarousel(), 375);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="BoutonCategory mt-3">
      <div className="carousel3 w-100 pb-4">
        <div className="container-fluid col-11 col-lg-11">
          <div id="bbb_viewed_slider_container">
            <div
              id="owl-Five"
              className="carousellignes owl-carousel owl-theme bbb_viewed_slider"
            >
              {categories.map((cat) => {
                return (
                  <div className="owl-item">
                    <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <Link to={`/AllProduct?category=${cat}`}>
                        <button
                          type="button"
                          className="buttonCatego btn btn-success"
                        >
                          {cat}
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoutonCategory;
