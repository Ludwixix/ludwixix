import React, { useEffect, useState } from "react";
import InstagramEmbed from "react-instagram-embed";
import { X, ArrowDown } from "react-feather";
import moment from "moment";
import styles from "./Styles/CovidCount.module.scss";

const CovidCount: React.FC = ({}) => {
  function callCovid() {
    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      params: { country: "Australia" },
      headers: {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "0830ee29b9mshf910432dbf1b01ep12e628jsn6be9f6ff8f91",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setCovidData(response.data.data.covid19Stats);
        console.log(response.data.data.covid19Stats);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(callCovid, []);

  const [covidData, setCovidData] = useState([]);
  const [showStates, setShowStates] = useState(false);
//   const [arrowDir, setArrowDir] = useState('false');


  const covidDataDate = moment(
    new Date(covidData[0] && covidData[0].lastUpdate)
  ).format("MMM Do YYYY");

  function showStats() {
    showStates ? setShowStates(false) : setShowStates(true);
  }

  function buildCovidData() {
    let totalConfirmed = 0;
    let totalDeaths = 0;
    
    return (
      <ul className={styles.covidCount}>
        
        <div className={styles.title}>Covid AU - {covidDataDate}</div>
        {covidData.map((data, index) => {
        var animation =  {"--animation-order": index +1}  as React.CSSProperties;
          totalConfirmed = totalConfirmed + data.confirmed;
          totalDeaths = totalDeaths + data.deaths;
          return (
            <>
              {showStates && (
                <div className={styles.stateStats}>
                  <div className={styles.covidItem}  style={animation}>
                    <li>{data.province}</li>
                    <li>
                      <span>Confirmed: </span> {data.confirmed}
                    </li>
                    <li>
                      <span>Deaths: </span>
                      {data.deaths}
                    </li>
                  </div>
                </div>
              )}
            </>
          );
        })}

        <div className={styles.totals}>
          <li>
            <span>Total Confirmed: </span> {totalConfirmed}
          </li>
          <li>
            <span>Total Deaths: </span> {totalDeaths}
            <button
          onClick={showStats}
          className={styles.buttonThree}
          role="button">
              {showStates ? <X /> : <ArrowDown /> }
          
        </button>
          </li>
        </div>
      </ul>
    );
  }

  return <div>{buildCovidData()}</div>;
};
export default CovidCount;
