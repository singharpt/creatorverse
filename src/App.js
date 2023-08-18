import "./App.css";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import Button from "@mui/material/Button";

function App() {
  const [text] = useTypewriter({
    words: [
      "View Creators",
      "Add Creators",
      "Edit Creators",
      "Delete Creators",
      "Your Creators Portfolio",
    ],
  });
  return (
    <main className="app">
      <div className="lander">
        <div className="lander-heading">
          <h1 className="lander-heading-h1">
            CREATORVERSE{" "}
            <span className="lander-heading-h1-span">
              {"<"}
              {text}
              {" />"}
            </span>
          </h1>
        </div>
        <div className="lander-button">
          <Link to="/show">
            <Button variant="outlined">Show Creators</Button>
          </Link>
          <Link to="/add">
            <Button variant="outlined">Add Creators</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default App;
