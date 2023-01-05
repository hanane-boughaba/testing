import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Main from "./Main";

const Content = () => {
  const movie = useSelector((state) => state.movie);

  const [whatToReturn, setwhatToReturn] = useState();

  useEffect(() => {
    if (
      movie.searchedMovies.length === 0 &&
      movie.categoryMovies.length === 0
    ) {
      setwhatToReturn(1);
    } else if (movie.categoryMovies.length > 0) {
      setwhatToReturn(2);
    }
    if (movie.searching) {
      setwhatToReturn(3);
    }
  }, [movie]);

  switch (whatToReturn) {
    case 1:
      return <Main data={movie.allMovies} />;
    case 2:
      return <Main data={movie.categoryMovies} />;
    case 3:
      return <Main data={movie.searchedMovies} />;
  }
};

export default Content;