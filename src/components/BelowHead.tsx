import React, { useEffect, useState } from "react";
import Burg from "../components/Burg";
import InstagramEmbed from "react-instagram-embed";
import { X } from "react-feather";
import moment from "moment";
import { Router } from "@reach/router";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import Dynamic from "containers/Dynamic";
// import CovidCount from "./CovidCount";

import styles from "./Styles/BelowHead.module.scss";
// import { Link } from "@reach/router";
const BelowHead: React.FC = ({}) => {
  return (
    <div className={styles.row}>
      <div className={styles.colLeft}>{/* <CovidCount/> */}</div>
      <div className={styles.colMiddle} style={{paddingTop:'75px', minWidth: '20%'}}>
        {" "}
        {/* <FancyDiv> */}
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
        {/* </FancyDiv> */}
      </div>
      <div className={styles.colRight}>
        <div className={styles.belowHeadWrapper}>
          <img
            className={styles.logoImage}
            src={require("../logo.jpg")}
            alt="loading..."
          />
          <div className={styles.imgContainer}>
            <img
              className={styles.homeImage}
              src={require("../headshot.jpg")}
              alt="loading..."
            />
          </div>
          {/* <div className={styles.burgContainer}>
            <Burg />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default BelowHead;
