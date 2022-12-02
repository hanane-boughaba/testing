import "./css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const imgBaseURL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div
      style={{ maxWidth: "25rem", overflow: "hidden", height: "min-content" }}
      className="p-0 rounded-3 d-flex flex-column gap-2 bg-secondary bg-opacity-10 movieCard"
    >
      <div
        className="movieCardImg rounded-3"
        style={{
          backgroundImage:
            movie.backdrop_path && `url(${imgBaseURL}${movie.backdrop_path})`,
        }}
      ></div>

      <div className="cardContent container mx-2 my-3">
        <h3 className="display-6 fw-regular" style={{ fontSize: "1.6em" }}>
          {movie.title}
        </h3>
        <p className="text-secondary">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
