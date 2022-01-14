import React, { useState, useEffect } from "react";
import styles from "./Styles/infoPanel.module.scss";
const feather = require("feather-icons");
import { Linkedin, GitHub, Mail } from "react-feather";
import Burg from "../components/Burg";

feather.icons.x;
// {
//    name: 'x',
//    contents: '<line ... /><line ... />`,
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      class: 'feather feather-x',
//      xmlns: 'http://www.w3.org/2000/svg',
//      width: 24,
//      height: 24,
//      viewBox: '0 0 24 24',
//      fill: 'none',
//      stroke: 'currentColor',
//      'stroke-width': 2,
//      'stroke-linecap': 'round',
//      'stroke-linejoin': 'round',
//    },
//    toSvg: [Function],
// }

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = weekday[d.getDay()];

const InfoPanel: React.FC = ({}) => {
  const [affrim, setAffrim] = useState("");
  const [quoteName, setQuoteName] = useState("");

  // const getAffirmation = () => {
  console.log("clicked");
  useEffect(() => {
    // GET request using fetch inside useEffect React hook

    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://inspiring-quotes.p.rapidapi.com/random",
      params: { author: "Albert" },
      headers: {
        "x-rapidapi-host": "inspiring-quotes.p.rapidapi.com",
        "x-rapidapi-key": "0830ee29b9mshf910432dbf1b01ep12e628jsn6be9f6ff8f91",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setAffrim(response.data.quote);
        setQuoteName(response.data.author);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // }
  var style = { "--n": 250 } as React.CSSProperties;
  return (
    <div>
      <div className={styles.row} style={{marginTop:'150px'}}>
        <div className={styles.colLeft} style={{}}>
          {/* {" "}
          <div className={styles.row}>
            <div className={styles.type} style={style}>
              <h1>{affrim}...</h1>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.day}>- {quoteName}</div>
          </div> */}
          {/* <Burg/> */}
        </div>

        <div
          className={styles.colMiddle}
          style={{
            display: "flex",
            // flexDirection: "row-reverse",
            // justifyContent: "space-between",
            marginTop:'20px',
            marginRight:'20px'
          }}
        >
          {/* <Burg/> */}
          <div className={styles.row} style={{ flexDirection: "column" }}></div>
        </div>

        <div className={styles.colRight} style={{ color: "red" }}>
          {" "}
          <div className={styles.row} style={{ paddingTop: "20px" }}>
            <a href="https://github.com/ludwixix" target="_blank">
              <GitHub style={{ color: "#f6c5be" }} />
            </a>
            <a href="https://www.linkedin.com/in/sam-ludwig/" target="_blank">
              <Linkedin style={{ color: "black" }} />
            </a>
            <a href="mailto:sam.ludwig@gmail.com">
              <Mail style={{ color: "black" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoPanel;
