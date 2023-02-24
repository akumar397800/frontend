import React, { useState } from "react";
import "./LandingPage.css";
import axios from "axios";
import { states as allStates } from "../utils/states";
import Table from "../utils/Table";

const API = "http://localhost:3001/api/data";

const LandingPage = () => {
  const [total, setTotal] = useState("");
  const [state, setMyState] = useState(allStates[0]);
  const [activeCases, setActiveCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [death, setDeaths] = useState("");
  const [vaccinated, setVaccinated] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      total,
      state,
      activeCases,
      recovered,
      death,
      vaccinated,
    };
    // console.log(data);
    try {
      const res = await axios.post(API, data);
      const error = res.data.error
        ? res.data.error.details[0].message
        : "Data Saved successfully";
      alert(error);
    } catch {
      alert("Failed");
    }
  };
  return (
    <>
      <h1>Welcome to DashBoard</h1>
      <div className="inputdataForm container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Select State
            </label>
            <select
              value={state}
              className="form-select"
              onChange={(e) => setMyState(e.target.value)}
            >
              {allStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {/* Total Cases */}
          <div className="mb-3">
            <label htmlFor="total" className="form-label">
              Total Cases
            </label>
            <input
              type="text"
              className="form-control"
              id="total"
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>
          {/* Recovered */}
          <div className="mb-3">
            <label htmlFor="total" className="form-label">
              Total Recovered
            </label>
            <input
              type="text"
              className="form-control"
              id="total"
              onChange={(e) => setRecovered(e.target.value)}
            />
          </div>

          {/* Active Cases */}
          <div className="mb-3">
            <label htmlFor="total" className="form-label">
              Active Cases
            </label>
            <input
              type="text"
              className="form-control"
              id="total"
              onChange={(e) => setActiveCases(e.target.value)}
            />
          </div>
          {/* Deaths */}
          <div className="mb-3">
            <label htmlFor="total" className="form-label">
              Total Deaths
            </label>
            <input
              type="text"
              className="form-control"
              id="death"
              onChange={(e) => setDeaths(e.target.value)}
            />
          </div>
          {/* Vaccinated */}
          <div className="mb-3">
            <label htmlFor="total" className="form-label">
              Vaccinated
            </label>
            <input
              type="text"
              className="form-control"
              id="vaccinated"
              onChange={(e) => setVaccinated(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <Table />
      </div>
    </>
  );
};

export default LandingPage;
