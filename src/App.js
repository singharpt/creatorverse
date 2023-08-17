import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/show">
        <button>Show Creators</button>
      </Link>
      <Link to="/add">
        <button>Add Creators</button>
      </Link>
    </div>
  );
}

export default App;
