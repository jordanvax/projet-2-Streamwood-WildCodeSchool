import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CarrouselThreeFilms() {
  const [threeFilmId, setThreeFilmId] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Threefilm`)
      .then((response) => response.json())
      .then((data) => setThreeFilmId(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let filmId1 = 1;
  let filmId2 = 2;
  let filmId3 = 3;
  let filmsrc1 = "";
  let filmsrc2 = "";
  let filmsrc3 = "";

  if (threeFilmId[0]) {
    filmId1 = parseInt(threeFilmId[0].id, 10);
    filmId2 = parseInt(threeFilmId[1].id, 10);
    filmId3 = parseInt(threeFilmId[2].id, 10);
    filmsrc1 = threeFilmId[0].backdrop_path;
    filmsrc2 = threeFilmId[1].backdrop_path;
    filmsrc3 = threeFilmId[2].backdrop_path;
  }

  return (
    threeFilmId && (
      <div className="carousel w-100 pt-4">
        <div className="container-fluid col-11 col-lg-8">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel3film carousel-item active">
                <Link to={`/AllProduct/${filmId1}`}>
                  <img
                    src={filmsrc1}
                    className="imagecarouselligne card-img-top"
                    alt={filmId1}
                  />
                </Link>
                <div className="carousel-caption d-block col-4">
                  <p>TOP 3 DE LA SEMAINE</p>
                </div>
              </div>
              <div className="carousel3film carousel-item">
                <Link to={`/AllProduct/${filmId2}`}>
                  <img
                    src={filmsrc2}
                    className="imagecarouselligne card-img-top"
                    alt={filmId2}
                  />
                </Link>
                <div className="carousel-caption d-block col-4">
                  <p>TOP 3 DE LA SEMAINE</p>
                </div>
              </div>
              <div className="carousel3film carousel-item">
                <Link to={`/AllProduct/${filmId3}`}>
                  <img
                    src={filmsrc3}
                    className="imagecarouselligne card-img-top"
                    alt={filmId3}
                  />
                </Link>
                <div className="carousel-caption d-block col-4">
                  <p>TOP 3 DE LA SEMAINE</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default CarrouselThreeFilms;
