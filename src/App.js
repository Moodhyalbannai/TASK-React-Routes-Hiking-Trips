import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Router, Routes } from "react-router-dom";
import TripItem from "./components/TripItem";

function App() {
  return (
    <div id="page-top">
      <Nav></Nav>
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/TripsList" Component={TripsList} />
        <Route path="/TripDetail/:tripSlug" Component={TripDetail} />
        <Route path="/TripItem" Component={TripItem} />
      </Routes>
    </div>
  );
}

export default App;
