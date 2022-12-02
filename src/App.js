import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAPI } from "./app/movieSlice";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
