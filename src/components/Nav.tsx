import { Link } from "@reach/router";

import React from "react";
import "@animated-burgers/burger-slip/dist/styles.css";
import styles from "./Styles/Nav.module.scss";
const Nav = () => {
  //   const [openBurg, setOpenBurg] = useState(false);
  var animation =  {"--animation-order": 1}  as React.CSSProperties;
  var animation1 =  {"--animation-order": 2}  as React.CSSProperties;
  var animation2 =  {"--animation-order": 3}  as React.CSSProperties;
  var animation3 =  {"--animation-order": 4}  as React.CSSProperties;
  return (
    <div className={styles.navContainer}>
      <nav>
        <Link className={styles.links} style={animation} to="/">Home</Link>
        <Link className={styles.links} style={animation1} to="/about">Covid Stats</Link>
        {/* <Link className={styles.links} style={animation2} to="/blog">Blog</Link>
        <Link className={styles.links} style={animation3} to="/dynamic">Dynamic</Link> */}
      </nav>
    </div>
  );
};

export default Nav;
