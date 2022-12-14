import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/picture/logo_vert_p2.png";
import user from "@assets/picture/user_1.png";

function NavBar() {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/Films`)
      .then((response) => response.json())
      .then((dataJs) => setDatas(dataJs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav
      className="navbar d-flex p-0 justify-content-center sticky-top"
      id="navbar"
    >
      <div className="me-auto d-none d-md-inline">
        <Link to="/" className="navbar-toggler text-decoration-none">
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="70"
            className="navbar-brand d-none d-md-inline"
          />
          <div className="d-none d-md-inline text-white">StreamWood</div>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <Link
          className="text-white d-md-block d-md-none me-3 navbar-toggler text-decoration-none"
          to="/AllProduct"
        >
          Movies
        </Link>
        <Link to="/" className="navbar-toggler text-decoration-none">
          <div className="d-flex d-md-none pe-2">
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="70"
              className="navbar-brand"
            />
          </div>
        </Link>
        <Link to="/Account" className="navbar-toggler text-decoration-none">
          <div className="d-md-block d-md-none me-3">
            <img
              src={user}
              alt="icone_user"
              width="25"
              height="35"
              className="navbar-brand"
            />
          </div>
        </Link>
        <Link
          className="d-none d-md-block text-white navbar-toggler text-decoration-none"
          to="/AllProduct"
        >
          Movies
        </Link>
        <Link
          className="d-md-flex text-white d-none d-md-inline navbar-toggler text-decoration-none"
          to="/Account"
        >
          Account
        </Link>
        <Link
          className="d-none d-md-block text-white navbar-toggler text-decoration-none"
          to="OurValues"
        >
          Values
        </Link>
      </div>
      <button
        className="d-none d-md-block p-2 navbar-toggler"
        type="button"
        onClick={() => setShow(!show)}
      >
        {show === true ? "" : ""}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#fff"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
      {show && (
        <form role="search">
          <input
            className="d-none d-md-block me-n3"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="menuDeroulant input-nav position-absolute">
            {datas
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase() || !searchTerm);
              })
              .map((movie) => {
                return (
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    key={movie.title}
                    className="navbar-toggler d-none d-md-block"
                  >
                    <Link
                      className="navbar-toggler"
                      to={`/AllProduct/${movie.id}`}
                    >
                      <img
                        className="img-fluid col-8"
                        src={movie.poster_path}
                        alt={movie.title}
                      />
                    </Link>
                  </button>
                );
              })}
          </div>
        </form>
      )}
    </nav>
  );
}

export default NavBar;
