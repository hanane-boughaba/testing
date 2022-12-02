import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions, fetchCategory } from "../app/movieSlice";
import { ids } from "../movieCategoryIds";

import "./css/Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const dispatchCategory = (id) => {
    console.log(id);
    switch (id) {
      case ids.Action:
        dispatch(fetchCategory(id));
        console.log("Action Dispatched");
        break;
      case ids.Romance:
        dispatch(fetchCategory(id));
        break;
      case ids.Animation:
        dispatch(fetchCategory(id));
        break;
      case ids.Family:
        dispatch(fetchCategory(id));
        break;
    }
  };

  useEffect(() => {
    dispatch(actions.searchMovie(search));
  }, [search]);

  return (
    <nav className="py-3 container-fluid shadow-sm">
      <div className="navbar-content container d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <i class="bi bi-film"></i>
          <input
            type="text"
            className="form-control bg-secondary bg-opacity-10"
            name="search"
            id="search"
            aria-describedby="helpId"
            placeholder="Search for a movie"
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>

        <div
          style={{ width: "max-content" }}
          className="categories d-flex gap-5 align-items-center"
        >
          <div
            className="col rows-col-2 align-items-center text-center categoryToggler"
            onClick={() => dispatchCategory(ids.Fantasy)}
          >
            <i class="bi fs-4 text-warning bi-fire"></i>
            <h6 className="text-secondary my-0">Fantasy</h6>
          </div>
          <div
            className="col rows-col-2 align-items-center text-center categoryToggler"
            onClick={() => dispatchCategory(ids.War)}
          >
            <i class="bi fs-4 text-danger bi-balloon-heart-fill"></i>
            <h6 className="text-secondary my-0">War</h6>
          </div>
          <div
            className="col rows-col-2 align-items-center text-center categoryToggler"
            onClick={() => dispatchCategory(ids.Action)}
          >
            <i class="bi fs-4 text-primary bi-truck-front"></i>
            <h6 className="text-secondary my-0">Action</h6>
          </div>
          <div
            className="col rows-col-2 align-items-center text-center categoryToggler"
            onClick={() => dispatchCategory(ids.Family)}
          >
            <i class="bi fs-4 text-info bi-house-heart"></i>
            <h6 className="text-secondary my-0">Family</h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
