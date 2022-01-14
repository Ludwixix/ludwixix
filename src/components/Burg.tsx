import React, { useState } from "react";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import Nav from "../components/Nav";
import styles from "./Styles/burg.module.scss"

const Burg: React.FC = () => {
  const [openBurg, setOpenBurg] = useState(false);
  const handleBurg = (openBurg) => {
    openBurg ? setOpenBurg(false) : setOpenBurg(true);
  };
  return (
    <div style={{marginLeft:'90%', marginTop:'20px'}}
      onClick={() => {
        handleBurg(openBurg);
      }}
    >
      <Burger isOpen={openBurg} className={styles.burgers} direction={'left'}/>
    {openBurg ? <Nav/> : ''}
     </div>
  );
};

export default Burg;
