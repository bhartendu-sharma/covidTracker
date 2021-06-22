import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let [data, setData] = useState([]);
  let [stateWiseData, setstateWiseData] = useState([]);
  const getCovidData = async () => {
    try {
      let covidData = await fetch("https://api.covid19india.org/data.json");
      covidData = await covidData.json();
      stateWiseData = await covidData.statewise;
      setstateWiseData(stateWiseData);
      console.log(stateWiseData.length);
      covidData = await covidData.statewise[0];

      setData(covidData);
      console.log(covidData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => getCovidData(), []);
  return (
    <>
      {/* <div>{getCovidData}</div> */}
      <div className="container mt-5">
        <div className="container-fluid d-flex justify-content-center my-5">
          <div className="text-center my-1">
            <div class="content">
              <h2>India</h2>
              <h2>India</h2>
            </div>
          </div>
        </div>
        <div className="covid-text d-flex justify-content-center">
          <h2 data-text="Covind-19 Live..." className="text-danger">
            Covid-19 Live🔴
          </h2>
        </div>
        {/* <div style={{ height: "10px" }}></div> */}
        <div className="container-fluid row flex-column text-center">
          <div className="row  ">
            <div className="d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-warning mx-5 text-white ">
              <h1>
                <span style={{ fontSize: "15px" }}>Total</span>Confirmed Cases
              </h1>
              <h2>{data.confirmed}</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-primary mx-5 text-white ">
              <h1>
                <span style={{ fontSize: "15px" }}>Total</span> Active Cases
              </h1>
              <h2>{data.active}</h2>
            </div>
          </div>
          <div className="row  ">
            <div className="d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-success mx-5 text-white ">
              <h1>
                <span style={{ fontSize: "15px" }}>Total</span>Recovered Cases
              </h1>
              <h2>{data.recovered}</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-danger mx-5 text-white ">
              <h1>
                <span style={{ fontSize: "15px" }}>Total</span>Total Deaths
              </h1>
              <h2>{data.deaths}</h2>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center align-items-center mt-5 card item-card card-block  bg-secondary mx-5 text-white">
              <h3>Last Upaded At</h3>
              <h4>{data.lastupdatedtime}</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <table class="table ">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">State</th>
                <th scope="col">confirmed</th>
                <th scope="col">Recovered</th>
                <th scope="col">Deaths</th>
                <th scope="col">Active</th>
                <th scope="col">Updated</th>
              </tr>
            </thead>
            <tbody>
              {stateWiseData.map((data, i) => {
                return (
                  <tr key={i}>
                    <th scope="col" className="text-primary">
                      {data.state}
                    </th>
                    <th scope="col" className="text-warning">
                      {data.confirmed}
                    </th>
                    <th scope="col" className="text-success">
                      {data.recovered}
                    </th>
                    <th scope="col" className="text-danger">
                      {data.deaths}
                    </th>
                    <th scope="col" className="text-primary">
                      {data.active}
                    </th>
                    <th scope="col" className="text-secondary">
                      {data.lastupdatedtime}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="bg-primary text-white d-flex justify-content-center align-items-center"
        style={{ height: "50px" }}
      >
        <h4>Made with Bhartendu Sharma © 2021</h4>
      </div>
    </>
  );
};

export default App;
