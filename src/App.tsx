import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";

// import FancyDiv from "components/FancyDiv";
import BelowHead from "components/BelowHead";
import InfoPanel from "components/InfoPanel";
import Dynamic from "containers/Dynamic";
// import Burg from 'components/Burg'

import styles from './app.module.scss';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);



function App() {
  return (
    <Root>
      <InfoPanel/>
      <BelowHead />
      <div style={{backgroundColor: '#539e8a'}}>
        <div className={styles.content}>

        </div>
      </div>
    </Root>
  );
}

export default App;
