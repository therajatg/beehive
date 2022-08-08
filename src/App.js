import "./App.css";
import { Router } from "./frontend/Router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1200} />
      <Router className="any" />
    </div>
  );
}

export default App;
