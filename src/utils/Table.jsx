import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  //   setTableData(getTable());
  function getTable() {
    axios
      .get(API_URL)
      .then((response) => {
        const allData = response.data;
        setTableData(allData);
      })
      .catch((err) => console.log(err));
  }
    useEffect(() => {
      getTable()
  },[])
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">State</th>
            <th scope="col">Total Cases</th>
            <th scope="col">Recovered</th>
            <th scope="col">Active Cases</th>
            <th scope="col">Vaccinated</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr key={item._id}>
                <th scope="row">{item.state}</th>
                <td>{item.total}</td>
                <td>{item.recovered}</td>
                <td>{item.activeCases}</td>
                <td>{item.vaccinated}</td>
                <td>{item.death}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
