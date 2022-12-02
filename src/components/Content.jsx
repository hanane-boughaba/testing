import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Main from "./Main";

const Content = () => {
  const movie = useSelector((state) => state.movie);

  const [whatToReturn, setwhatToReturn] = useState(1);

  useEffect(() => {
    if (
      movie.searchedMovies.length === 0 &&
      movie.categoryMovies.length === 0
    ) {
      setwhatToReturn(1);
    } else if (movie.categoryMovies.length > 0) {
      setwhatToReturn(2);
    } else if (movie.searchedMovies.length > 0) {
      setwhatToReturn(3);
      }
  }, [movie.searchedMovies, movie.categoryMovies]);

  switch (whatToReturn) {
    case 2:
      return <Main data={movie.categoryMovies.items} />;
    case 3:
      return <Main data={movie.searchedMovies} />;

    default:
      return <Main data={movie.allMovies} />;
  }
};

export default Content;