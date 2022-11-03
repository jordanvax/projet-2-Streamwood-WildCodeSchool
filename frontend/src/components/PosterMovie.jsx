import filmsData from "@services/films";

const PosterMovie = ({ movie }) => {
    return (
        <img
        className="col-5 col-sm-3 col-md-2 col-lg-1 img-fluid p-2"
        src={movie.poster_path}
    />                     
    );
};

export default PosterMovie;