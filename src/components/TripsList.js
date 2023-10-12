import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { NavLink, useParams } from "react-router-dom";

function TripsList() {
  const { tripDifficulty } = useParams([]);
  const [query, setQuery] = useState("");

  const filteredTrips = tripsData
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .filter((trip) => {
      if (tripDifficulty) {
        return trip.difficulty === tripDifficulty;
      }
      return true;
    })
    .map((trip, index) => <TripItem trip={trip} key={index} />);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <NavLink to={`/TripsList`}>
            <button
              className="btn btn-primary btn-xl"
              onClick={() => setQuery("")}
            >
              All
            </button>
          </NavLink>
          <NavLink to={`/TripsList/easy`}>
            <button className="btn btn-primary btn-xl">Easy</button>
          </NavLink>
          <NavLink to={`/TripsList/moderate`}>
            <button className="btn btn-primary btn-xl">Moderate</button>
          </NavLink>
          <NavLink to={`/TripsList/hard`}>
            <button className="btn btn-primary btn-xl">Hard</button>
          </NavLink>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{filteredTrips}</div>
      </div>
    </section>
  );
}

export default TripsList;
