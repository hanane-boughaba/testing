import MovieCard from "./MovieCard";

const Main = ({ data }) => {
  console.log(data);
  return (
    <div style={{maxWidth: "80vw"}} className="my-5 container d-flex flex-wrap gap-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center m-auto">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Main;
